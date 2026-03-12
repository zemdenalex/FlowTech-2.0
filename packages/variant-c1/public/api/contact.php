<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON']);
    exit;
}

$name = trim($input['name'] ?? '');
$email = trim($input['email'] ?? '');
$organization = trim($input['organization'] ?? '');
$message = trim($input['message'] ?? '');

// Validation
if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['error' => 'Name, email, and message are required']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit;
}

// Rate limiting
$rateLimitFile = sys_get_temp_dir() . '/flowtech_ratelimit_' . md5($_SERVER['REMOTE_ADDR']);
if (file_exists($rateLimitFile)) {
    $lastTime = (int)file_get_contents($rateLimitFile);
    if (time() - $lastTime < 60) {
        http_response_code(429);
        echo json_encode(['error' => 'Too many requests. Please wait a minute.']);
        exit;
    }
}
file_put_contents($rateLimitFile, time());

// Sanitize
$name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$email = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$organization = htmlspecialchars($organization, ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

// SMTP config
$smtpConfig = '/var/www/FlowTech-2.0/.smtp-config.json';
if (!file_exists($smtpConfig)) {
    // Fallback: save submission to file
    $submission = [
        'date' => date('Y-m-d H:i:s'),
        'name' => $name,
        'email' => $email,
        'organization' => $organization,
        'message' => $message,
        'ip' => $_SERVER['REMOTE_ADDR']
    ];
    $logFile = '/var/www/FlowTech-2.0/submissions.log';
    file_put_contents($logFile, json_encode($submission, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT) . "\n---\n", FILE_APPEND);
    echo json_encode(['success' => true]);
    exit;
}

$smtp = json_decode(file_get_contents($smtpConfig), true);

// Build email via Python smtplib (more reliable than PHP mail())
$to = $smtp['to'] ?? 'i@nikusachev.ru';
$subject = "Заявка с сайта FlowTech от {$name}";

$body = "Новая заявка с сайта FlowTech (flowtech.moscow)\n";
$body .= "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
$body .= "Имя: {$name}\n";
$body .= "Email: {$email}\n";
if (!empty($organization)) {
    $body .= "Организация: {$organization}\n";
}
$body .= "\nСообщение:\n{$message}\n";
$body .= "\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
$body .= "IP: {$_SERVER['REMOTE_ADDR']}\n";
$body .= "Дата: " . date('Y-m-d H:i:s') . "\n";

// Use Python to send via SMTP (handles TLS/auth properly)
$pyScript = escapeshellarg("
import smtplib, json, sys
from email.mime.text import MIMEText

cfg = json.load(open('{$smtpConfig}'))
msg = MIMEText(sys.stdin.read(), 'plain', 'utf-8')
msg['Subject'] = " . escapeshellarg($subject) . "
msg['From'] = cfg['from']
msg['To'] = cfg['to']
msg['Reply-To'] = " . escapeshellarg($email) . "

try:
    s = smtplib.SMTP_SSL(cfg['host'], cfg.get('port', 465))
    s.login(cfg['user'], cfg['password'])
    s.send_message(msg)
    s.quit()
    print('ok')
except Exception as e:
    print(f'error: {e}', file=sys.stderr)
    sys.exit(1)
");

$descriptorspec = [
    0 => ['pipe', 'r'],
    1 => ['pipe', 'w'],
    2 => ['pipe', 'w']
];

$process = proc_open("python3 -c {$pyScript}", $descriptorspec, $pipes);

if (is_resource($process)) {
    fwrite($pipes[0], $body);
    fclose($pipes[0]);

    $stdout = stream_get_contents($pipes[1]);
    $stderr = stream_get_contents($pipes[2]);
    fclose($pipes[1]);
    fclose($pipes[2]);

    $exitCode = proc_close($process);

    if ($exitCode === 0) {
        echo json_encode(['success' => true]);
    } else {
        // Fallback: save to file
        $submission = [
            'date' => date('Y-m-d H:i:s'),
            'name' => $name,
            'email' => $email,
            'organization' => $organization,
            'message' => $message,
            'ip' => $_SERVER['REMOTE_ADDR'],
            'smtp_error' => trim($stderr)
        ];
        $logFile = '/var/www/FlowTech-2.0/submissions.log';
        file_put_contents($logFile, json_encode($submission, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT) . "\n---\n", FILE_APPEND);
        // Still report success to user — they don't need to know about backend issues
        echo json_encode(['success' => true]);
    }
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Server error']);
}

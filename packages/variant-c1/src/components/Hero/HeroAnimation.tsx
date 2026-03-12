const HeroAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Flow streamlines — aerodynamic wind tunnel feel */}
        <path
          d="M-100 200 C200 180, 400 260, 700 220 S1100 180, 1540 240"
          stroke="var(--color-gd-text)"
          strokeWidth="1.5"
          opacity="0.08"
          className="flow-line"
        />
        <path
          d="M-100 350 C300 320, 500 400, 800 360 S1200 300, 1540 380"
          stroke="var(--color-gd-text)"
          strokeWidth="1"
          opacity="0.06"
          className="flow-line-reverse"
        />
        <path
          d="M-100 500 C250 470, 600 540, 900 490 S1300 450, 1540 520"
          stroke="var(--color-gd-text)"
          strokeWidth="1.5"
          opacity="0.07"
          className="flow-line-slow"
        />
        <path
          d="M-100 650 C200 630, 450 700, 750 660 S1100 620, 1540 680"
          stroke="var(--color-gd-text)"
          strokeWidth="1"
          opacity="0.05"
          className="flow-line"
          style={{ animationDelay: '2s' }}
        />
        <path
          d="M-100 130 C350 100, 550 180, 850 140 S1200 100, 1540 160"
          stroke="var(--color-gd-text)"
          strokeWidth="0.8"
          opacity="0.05"
          className="flow-line-reverse"
          style={{ animationDelay: '4s' }}
        />
        <path
          d="M-100 780 C300 760, 600 820, 950 770 S1300 740, 1540 800"
          stroke="var(--color-gd-text)"
          strokeWidth="0.8"
          opacity="0.04"
          className="flow-line-slow"
          style={{ animationDelay: '3s' }}
        />
      </svg>
    </div>
  )
}

export default HeroAnimation

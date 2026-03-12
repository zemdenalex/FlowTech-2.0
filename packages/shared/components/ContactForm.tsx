import { useState, type FormEvent } from 'react'
import { useTranslation } from 'react-i18next'

interface ContactFormProps {
  className?: string
  inputClassName?: string
  buttonClassName?: string
}

const ContactForm = ({ className = '', inputClassName = '', buttonClassName = '' }: ContactFormProps) => {
  const { t } = useTranslation('contacts')
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    setSending(true)

    const form = e.target as HTMLFormElement
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      organization: (form.elements.namedItem('organization') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        const body = await res.json().catch(() => null)
        setError(body?.error || t('form.error'))
      }
    } catch {
      setError(t('form.error'))
    } finally {
      setSending(false)
    }
  }

  if (submitted) {
    return (
      <div className={className}>
        <p className="text-lg font-medium">{t('form.success')}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder={t('form.name')}
          required
          className={inputClassName}
        />
        <input
          type="email"
          name="email"
          placeholder={t('form.email')}
          required
          className={inputClassName}
        />
        <input
          type="text"
          name="organization"
          placeholder={t('form.organization')}
          className={inputClassName}
        />
        <textarea
          name="message"
          placeholder={t('form.message')}
          rows={4}
          required
          className={inputClassName}
        />
        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}
        <button type="submit" disabled={sending} className={buttonClassName}>
          {sending ? '...' : t('form.submit')}
        </button>
      </div>
    </form>
  )
}

export default ContactForm

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
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
        <button type="submit" className={buttonClassName}>
          {t('form.submit')}
        </button>
      </div>
    </form>
  )
}

export default ContactForm

import { useTranslation } from 'react-i18next'
import { LANGUAGES, type Language } from '../i18n/index'

const LANG_LABELS: Record<Language, string> = { ru: 'RU', en: 'EN', zh: '中文' }

interface LanguageSwitcherProps {
  className?: string
}

const LanguageSwitcher = ({ className = '' }: LanguageSwitcherProps) => {
  const { i18n } = useTranslation()

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {LANGUAGES.map((lang) => (
        <button
          key={lang}
          onClick={() => i18n.changeLanguage(lang)}
          className={`text-sm font-light px-2 py-1 rounded transition-colors ${
            i18n.language === lang
              ? 'text-text-primary font-medium'
              : 'text-text-muted hover:text-text-secondary'
          }`}
        >
          {LANG_LABELS[lang]}
        </button>
      ))}
    </div>
  )
}

export default LanguageSwitcher

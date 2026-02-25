import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'outline' | 'ghost'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: ButtonVariant
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-white text-brand-main hover:bg-gray-100',
  outline: 'border border-brand-border text-text-primary hover:bg-bg-secondary',
  ghost: 'text-text-secondary hover:text-text-primary hover:bg-bg-secondary',
}

const Button = ({ children, variant = 'primary', className = '', ...props }: ButtonProps) => {
  const base = 'inline-flex items-center justify-center px-6 py-3 rounded-xl font-roboto font-light transition-colors text-center'

  return (
    <button className={`${base} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button

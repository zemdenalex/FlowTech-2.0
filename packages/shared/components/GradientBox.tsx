import type { HTMLAttributes, ReactNode } from 'react'

interface GradientBoxProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  direction?: 'br' | 'tr' | 'bl' | 'tl'
}

const directionClasses = {
  br: 'bg-gradient-to-br',
  tr: 'bg-gradient-to-tr',
  bl: 'bg-gradient-to-bl',
  tl: 'bg-gradient-to-tl',
} as const

const GradientBox = ({ children, className = '', direction = 'br', ...props }: GradientBoxProps) => {
  return (
    <div className={`${directionClasses[direction]} from-gd0 via-gd40 via-40% via-gd70 via-70% to-gd100 ${className}`} {...props}>
      {children}
    </div>
  )
}

export default GradientBox

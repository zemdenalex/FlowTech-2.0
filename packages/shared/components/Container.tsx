import type { HTMLAttributes, ReactNode } from 'react'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

const Container = ({ children, className = '', ...props }: ContainerProps) => {
  return (
    <div className={`container ${className}`} {...props}>
      {children}
    </div>
  )
}

export default Container

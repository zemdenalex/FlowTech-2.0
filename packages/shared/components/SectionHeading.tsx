import type { ReactNode } from 'react'

interface SectionHeadingProps {
  children: ReactNode
  align?: 'left' | 'right'
  className?: string
}

const SectionHeading = ({ children, align = 'left', className = '' }: SectionHeadingProps) => {
  const alignClass = align === 'right' ? 'rounded-bl-3xl ml-auto' : 'rounded-br-3xl'

  return (
    <div className={`bg-white text-brand-main px-5 py-2 w-fit ${alignClass} ${className}`}>
      <h2 className="font-roboto font-medium text-lg md:text-[40px] text-center">
        {children}
      </h2>
    </div>
  )
}

export default SectionHeading

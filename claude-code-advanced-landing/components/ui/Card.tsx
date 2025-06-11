import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'gradient' | 'elevated'
  children: React.ReactNode
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const variants = {
      default: 'bg-white border border-neutral-200 shadow-lg hover:shadow-xl transition-all duration-300',
      glass: 'bg-white/70 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300',
      gradient: 'bg-gradient-to-br from-white to-neutral-50 border border-neutral-200 shadow-xl hover:shadow-2xl transition-all duration-300',
      elevated: 'bg-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1'
    }
    
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-2xl p-6',
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export default Card
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-lg border border-border bg-background-secondary',
          hover &&
            'transition-all duration-300 hover:border-accent-primary hover:shadow-lg hover:shadow-accent-primary/20',
          className
        )}
        {...props}
      />
    )
  }
)

Card.displayName = 'Card'

export default Card

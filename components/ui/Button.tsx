import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
  children?: ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, children, ...props }, ref) => {
    const classes = cn(
      // Base styles
      'inline-flex items-center justify-center rounded-md font-medium transition-all duration-200',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
      'active:scale-95',
      // Variants
      {
        'bg-accent-primary text-white hover:bg-accent-secondary':
          variant === 'primary',
        'bg-background-secondary text-text-primary hover:bg-background-secondary/80':
          variant === 'secondary',
        'border-2 border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white':
          variant === 'outline',
        'text-text-primary hover:bg-background-secondary':
          variant === 'ghost',
      },
      // Sizes
      {
        'h-9 px-4 text-sm': size === 'sm',
        'h-11 px-6 text-base': size === 'md',
        'h-14 px-8 text-lg': size === 'lg',
      },
      className
    )

    if (asChild && children) {
      // Clone the child element and add the classes to it
      const child = children as any
      if (child?.props) {
        return {
          ...child,
          props: {
            ...child.props,
            className: cn(classes, child.props.className),
          }
        }
      }
    }

    return (
      <button
        className={classes}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button

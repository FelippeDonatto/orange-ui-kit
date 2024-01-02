import { ComponentProps, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { Slot } from '@radix-ui/react-slot'

const textVariants = tv({
  base: '',
  variants: {
    size: {
      sm: 'text-xs',
      md: 'text-xs',
      lg: 'text-sm',
      xl: 'text-md',
    },
    color: {
      primary: 'dark:text-white text-gray-900',
    },
    weigth: {
      regular: 'font-normal',
      mediun: 'font-mediun',
      bold: 'font-bold',
    },
    leading: {
      '20': 'leading-5',
      '24': 'leading-6',
    },
    decoration: {
      underline: 'underline underline-offset-4',
      uppercase: 'uppercase',
      none: 'none',
    },
  },
  defaultVariants: {
    size: 'sm',
    color: 'primary',
    weigth: 'regular',
    leading: '20',
    decoration: 'none',
  },
})

export type TextProps = ComponentProps<'p'> &
  VariantProps<typeof textVariants> & {
    children: ReactNode
    asChild?: boolean
  }

export function Text({
  children,
  size,
  color,
  decoration,
  weigth,
  leading,
  asChild,
}: TextProps) {
  const Comp = asChild ? Slot : 'span'
  return (
    <Comp
      className={textVariants({ size, color, weigth, decoration, leading })}
    >
      {children}
    </Comp>
  )
}

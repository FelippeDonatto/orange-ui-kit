import { ComponentProps, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { Slot } from '@radix-ui/react-slot'

const headingVariants = tv({
  base: '',
  variants: {
    size: {
      xxs: 'text-lg', // H6
      xs: 'text-xl', // H5
      sm: 'text-2xl', // H4
      md: 'text-4xl', // H3
      lg: 'text-6xl', // H2
      xl: 'text-8xl', // H1
    },
    color: {
      primary: 'dark:text-white text-gray-900',
    },
    weigth: {
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    leading: {
      '20': 'leading-5',
      '24': 'leading-6',
    },
    align: {
      center: 'text-center',
      left: 'text-left',
    },
  },
  defaultVariants: {
    size: 'sm',
    primary: 'white',
    weigth: 'semibold',
    leading: '20',
    align: 'left',
  },
})

export type HeadingProps = ComponentProps<'p'> &
  VariantProps<typeof headingVariants> & {
    children: ReactNode
    asChild?: boolean
    className?: string
  }

export function Heading({
  children,
  size,
  color,
  weigth,
  asChild,
  align,
  leading,
}: HeadingProps) {
  const Comp = asChild ? Slot : 'h2'
  return (
    <Comp
      className={headingVariants({
        leading,
        size,
        color,
        weigth,
        align,
      })}
    >
      {children}
    </Comp>
  )
}

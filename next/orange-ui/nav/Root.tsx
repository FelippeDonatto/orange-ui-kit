import { ComponentProps, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

export const navVariants = tv({
  base: 'px-32 h-20 w-full  max-lg:grid-cols-2 max-lg:px-4',
  variants: {
    align: {
      flex: 'flex items-center justify-between',
      grid: 'grid grid-cols-4 items-center justify-between',
    },
    background: {
      default: 'bg-gray-600',
      visible: 'bg-none',
    },
  },
  defaultVariants: {
    align: 'flex',
    background: 'default',
  },
})

export type NavProps = ComponentProps<'nav'> &
  VariantProps<typeof navVariants> & {
    children: ReactNode
  }

export function Root({ align, background, ...props }: NavProps) {
  return <nav className={navVariants({ align, background })} {...props} />
}

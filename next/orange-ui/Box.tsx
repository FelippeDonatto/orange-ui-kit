import { ComponentProps, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

export const boxVariants = tv({
  base: 'p-4',
  variants: {
    type: {
      default: 'dark:bg-gray-700 bg-gray-100 rounded-lg',
      gradient: 'rounded gradient',
    },
    align: {
      center: 'flex justify-center items-center w-full',
      start: 'flex justify-start items-center w-full',
      end: 'flex justify-end items-center w-full',
      between: 'flex justify-between items-center w-full',
    },
    border: {
      default: 'none',
      gray: 'border-2 border-gray-300/40',
      primaryRight: 'border-r-2 border-r-primary-500',
    },
  },
  defaultVariants: {
    type: 'default',
    align: 'start',
    border: 'default',
  },
})

export type BoxProps = ComponentProps<'div'> &
  VariantProps<typeof boxVariants> & {
    children: ReactNode
    type?: string
    align?: string
  }

export function Box({ children, type, align, border }: BoxProps) {
  return <div className={boxVariants({ type, align, border })}>{children}</div>
}

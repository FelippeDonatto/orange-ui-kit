import { ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const DivisorVariants = tv({
  base: 'flex w-full items-center gap-3 text-white rounded dark:bg-gray-700 bg-gray-100 p-4 dark:ring-primary-500 ring-primary-900 focus-within:ring-2',
  variants: {
    border: {
      default: 'none',
      opcional: 'border border-gray-400/30',
    },
    radius: {
      default: 'rounded',
      full: 'rounded-full',
    },
  },
  defaultVariants: {
    border: 'default',
    radius: 'default',
  },
})

export type DivisorProps = VariantProps<typeof DivisorVariants> & {
  children: ReactNode
}

export function Divisor({ children, border, radius }: DivisorProps) {
  return <div className={DivisorVariants({ border, radius })}>{children}</div>
}

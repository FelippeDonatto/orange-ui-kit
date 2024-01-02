import { ComponentProps, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { Slot } from '@radix-ui/react-slot'

const ButtonRootVariants = tv({
  base: 'p-4 flex items-center justify-center gap-3 outline-none text-xs font-black font-sans learing-5 uppercase',
  variants: {
    variant: {
      primary:
        'dark:bg-primary-500 bg-primary-700 w-full text-gray-900 hover:bg-primary-600 transition-all focus:ring-2 ring-white outline-none',
      secondary:
        'bg-gray-700 w-full text-primary-500 hover:bg-gray-800 transition-all focus:ring-2 ring-white outline-none',
      terciary:
        'bg-secondary-500 w-full text-gray-50 hover:bg-secondary-400 transition-all focus:ring-2 ring-white outline-none',
      disable: 'w-full cursor-no-drop bg-primary-900 text-gray-900 ',
    },
    radius: {
      default: 'rounded',
      full: 'rounded-full',
    },
  },
  defaultVariants: {
    variant: 'primary',
    radius: 'default',
  },
})

export type ButtonRootProps = ComponentProps<'button'> &
  VariantProps<typeof ButtonRootVariants> & {
    children: ReactNode
    asChild?: boolean
  }

export function ButtonRoot({
  children,
  asChild,
  variant,
  radius,
}: ButtonRootProps) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      className={ButtonRootVariants({
        variant,
        radius,
      })}
    >
      {children}
    </Comp>
  )
}

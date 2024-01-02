import { ComponentProps, ReactNode } from 'react'

export type MenuProps = ComponentProps<'ul'> & {
  children: ReactNode
}

export function Menu({ children }: MenuProps) {
  return (
    <ul className="col-span-2 flex items-center justify-center gap-8 font-bold uppercase max-lg:hidden">
      {children}
    </ul>
  )
}

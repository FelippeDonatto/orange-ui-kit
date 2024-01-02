import Link from 'next/link'
import { ComponentProps } from 'react'

export type ItemMenuProps = ComponentProps<typeof Link> & {
  href: string
  item: string
}

export function Item({ href, item, ...props }: ItemMenuProps) {
  return (
    <li className="list-none">
      <Link
        href={href}
        className="font-black text-gray-300 transition-all hover:text-gray-100"
        {...props}
      >
        {item}
      </Link>
    </li>
  )
}

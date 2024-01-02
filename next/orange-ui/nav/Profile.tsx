import Link from 'next/link'
import { Menu, Search, ShoppingBag } from 'lucide-react'

export function Profile() {
  return (
    <ul className="flex items-center justify-end gap-6">
      <li className="lg:hidden">
        <Link href="/dashboard" className="text-gray-300">
          <Menu />
        </Link>
      </li>

      <li>
        <Link href="/dashboard" className="text-gray-300">
          <Search />
        </Link>
      </li>

      <li>
        <Link href="/dashboard/loja" className="text-gray-300">
          <ShoppingBag />
        </Link>
      </li>
    </ul>
  )
}

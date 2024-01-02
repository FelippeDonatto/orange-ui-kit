import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'Orange Ui Kit - Testing',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body
        className={`${roboto.variable} bg-gray-50 font-sans font-normal text-gray-900 dark:bg-gray-900 dark:text-gray-50`}
      >
        {children}
      </body>
    </html>
  )
}

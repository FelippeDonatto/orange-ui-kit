import { ElementType } from 'react'

interface LogoProps {
  logo: ElementType
}

export function Logo({ logo: Logo }: LogoProps) {
  return <Logo className="w-[150px]" />
}

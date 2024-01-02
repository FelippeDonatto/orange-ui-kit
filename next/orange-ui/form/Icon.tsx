import { ComponentProps, ElementType } from 'react'

export type IconProps = ComponentProps<'svg'> & {
  icon: ElementType
}

export function Icon({ icon: Icon }: IconProps) {
  return <Icon className="h-5 w-5 font-bold text-gray-300" />
}

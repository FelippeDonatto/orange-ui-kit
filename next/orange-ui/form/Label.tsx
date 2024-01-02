import { ComponentProps } from 'react'

type LabelProps = ComponentProps<'label'>

export function Label(props: LabelProps) {
  return (
    <label
      className="font-sans text-xs font-bold leading-5 tracking-wide text-gray-900 dark:text-white"
      {...props}
    />
  )
}

import { ComponentProps } from 'react'

type RootProps = ComponentProps<'div'>

export function Root(props: RootProps) {
  return <div className="flex w-full flex-col items-start gap-2" {...props} />
}

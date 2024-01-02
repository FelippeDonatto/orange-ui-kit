import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

export function Input(props: InputProps) {
  return (
    <input
      id={props.name}
      className="w-full bg-transparent text-sm font-bold outline-none placeholder:text-gray-300"
      {...props}
    />
  )
}

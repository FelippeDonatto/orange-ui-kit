import Image from 'next/image'

const link =
  'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

export function Avatar() {
  return (
    <>
      {link ? (
        <Image
          src={link}
          alt=""
          width={48}
          height={48}
          className="h-12 w-12 rounded-full border-2 border-primary-500"
        />
      ) : (
        <div className="h-12 w-12 rounded-full border-2 border-primary-500 bg-gray-400" />
      )}
    </>
  )
}

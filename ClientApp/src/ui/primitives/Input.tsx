import React from 'react'

type Props = React.InputHTMLAttributes<HTMLInputElement>

export default function Input(props: Props){
  return (
    <input {...props} className={`w-full rounded-xl border border-gray-200 px-4 py-3 ${props.className || ''} focus-ring`} />
  )
}

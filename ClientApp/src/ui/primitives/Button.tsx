import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {variant?: 'primary' | 'ghost'}

export default function Button({variant='primary', className='', children, ...rest}: Props){
  const base = 'rounded-full px-4 py-2 text-sm font-semibold transition-smooth focus-ring'
  const styles = variant === 'primary' ? 'bg-primary text-white shadow' : 'bg-white border border-gray-200 text-gray-700'
  return (
    <button className={`${base} ${styles} ${className}`} {...rest}>
      {children}
    </button>
  )
}

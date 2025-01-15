import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'default' | 'inverse'
}

export function Button({ children, variant = 'default', ...props }: ButtonProps) {
  const baseStyles = "px-4 py-2 rounded transition-colors"
  const variantStyles = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    inverse: "bg-white text-black hover:bg-gray-100"
  }

  return (
    <button
      {...props}
      className={`${baseStyles} ${variantStyles[variant]}`}
    >
      {children}
    </button>
  )
}


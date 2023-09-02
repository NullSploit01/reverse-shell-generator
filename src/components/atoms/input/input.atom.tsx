import clsx from 'clsx'
import React, { FC } from 'react'

type IInputProps = {
  value?: string
  placeholder?: string
  size?: keyof typeof inputSizes
  className?: string
  type: 'text' | 'number' | 'search'
  color?: keyof typeof inputColors
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const inputSizes = {
  '2xl': 'input-2xl',
  xl: 'input-xl',
  lg: 'input-lg',
  md: 'input-md',
  sm: 'input-sm',
  xs: 'input-xs'
}

const inputColors = {
  primary: 'input-primary',
  secondary: 'input-secondary',
  success: 'input-success',
  warning: 'input-warning',
  error: 'input-error'
}

const Input: FC<IInputProps> = ({
  value,
  placeholder,
  size = 'xl',
  type,
  className = '',
  color = 'primary',
  onChange
}) => {
  return (
    <input
      className={clsx(`input ${inputColors[color]} ${inputSizes[size]} ${className}`)}
      value={value}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
    />
  )
}

export default Input

import clsx from 'clsx'
import React, { FC } from 'react'

type IInputProps = {
  value?: string
  placeholder?: string
  size?: keyof typeof inputSizes
  className: string
  type: 'text' | 'number'
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

const Input: FC<IInputProps> = ({
  value,
  placeholder,
  size = 'xl',
  type,
  className = '',
  onChange,
  ...rest
}) => {
  return (
    <input
      className={clsx(`input ${inputSizes[size]} ${className}`)}
      value={value}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      {...rest}
    />
  )
}

export default Input

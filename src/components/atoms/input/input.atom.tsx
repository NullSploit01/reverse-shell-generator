import clsx from 'clsx'
import React, { FC } from 'react'

import { IInputProps, inputColors, inputSizes } from '@/components/atoms/input/interface'

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

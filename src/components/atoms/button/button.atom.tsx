import React from 'react'

import {
  ButtonColors,
  ButtonSizes,
  IButtonProps,
  OutlineButtonColors,
  SolidButtonColors
} from './interface'

const Button: React.FC<IButtonProps> = ({
  label,
  onClick,
  color = 'primary',
  solid,
  outline,
  className = '',
  size = 'md'
}) => {
  const btnColor = solid
    ? SolidButtonColors[color]
    : outline
    ? OutlineButtonColors[color]
    : ButtonColors[color]

  return (
    <button onClick={onClick} className={`btn ${btnColor} ${ButtonSizes[size]} ${className}`}>
      {label}
    </button>
  )
}

export default Button

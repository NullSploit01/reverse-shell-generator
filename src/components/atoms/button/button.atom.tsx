import React from 'react'

type IButtonProps = {
  label: string
  solid?: boolean
  outline?: boolean
  className?: string
  onClick?: () => void
  size?: keyof typeof ButtonSizes
  color?: keyof typeof ButtonColors
}

const ButtonColors = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  success: 'btn-success',
  warning: 'btn-warning',
  error: 'btn-error'
}

const OutlineButtonColors = {
  primary: 'btn-outline-primary',
  secondary: 'btn-outline-secondary',
  success: 'btn-outline-success',
  warning: 'btn-outline-warning',
  error: 'btn-outline-error'
}

const SolidButtonColors = {
  primary: 'btn-solid-primary',
  secondary: 'btn-solid-secondary',
  success: 'btn-solid-success',
  warning: 'btn-solid-warning',
  error: 'btn-solid-error'
}

const ButtonSizes = {
  xl: 'btn-xl',
  lg: 'btn-lg',
  md: 'btn-md',
  sm: 'btn-sm',
  xs: 'btn-xs'
}

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

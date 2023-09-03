export type IButtonProps = {
  label: string
  solid?: boolean
  outline?: boolean
  className?: string
  onClick?: () => void
  size?: keyof typeof ButtonSizes
  color?: keyof typeof ButtonColors
}

export enum ButtonColors {
  primary = 'btn-primary',
  secondary = 'btn-secondary',
  success = 'btn-success',
  warning = 'btn-warning',
  error = 'btn-error'
}

export enum OutlineButtonColors {
  primary = 'btn-outline-primary',
  secondary = 'btn-outline-secondary',
  success = 'btn-outline-success',
  warning = 'btn-outline-warning',
  error = 'btn-outline-error'
}

export enum SolidButtonColors {
  primary = 'btn-solid-primary',
  secondary = 'btn-solid-secondary',
  success = 'btn-solid-success',
  warning = 'btn-solid-warning',
  error = 'btn-solid-error'
}

export enum ButtonSizes {
  xl = 'btn-xl',
  lg = 'btn-lg',
  md = 'btn-md',
  sm = 'btn-sm',
  xs = 'btn-xs'
}

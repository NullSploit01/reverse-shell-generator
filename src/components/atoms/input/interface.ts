export type IInputProps = {
  value?: string
  placeholder?: string
  size?: keyof typeof inputSizes
  className?: string
  type: 'text' | 'number' | 'search'
  color?: keyof typeof inputColors
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export enum inputSizes {
  '2xl' = 'input-2xl',
  xl = 'input-xl',
  lg = 'input-lg',
  md = 'input-md',
  sm = 'input-sm',
  xs = 'input-xs'
}

export enum inputColors {
  primary = 'input-primary',
  secondary = 'input-secondary',
  success = 'input-success',
  warning = 'input-warning',
  error = 'input-error'
}

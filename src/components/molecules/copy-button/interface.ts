import { IButtonProps } from '@/components/atoms/button/interface'

export interface ICopyButtonProps extends IButtonProps {
  textToCopy: string
  message?: string
}

import { IButtonProps } from '../button/interface'

export interface IDropdownProps extends IButtonProps {
  data: IDataItem[]
  position?: keyof typeof IDropdownPositions
  onDropdownButtonClick?: (value: string) => void
}

export enum IDropdownPositions {
  bottomRight = 'dropdown-menu-bottom-right',
  bottomLeft = 'dropdown-menu-bottom-left',
  topRight = 'dropdown-menu-top-right',
  topLeft = 'dropdown-menu-top-left',
  right = 'dropdown-menu-right',
  left = 'dropdown-menu-left'
}

export type IDataItem = {
  label: any
  value: string
}

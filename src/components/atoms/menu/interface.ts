import { IDataItem } from '../dropdown/interface'

export type IMenuProps = {
  label: string
  data: IDataItem[]
  onClick?: (value: string) => void
}

export type IMenuItemProps = {
  label: string
  value: string
  onClick?: (value: string) => void
}

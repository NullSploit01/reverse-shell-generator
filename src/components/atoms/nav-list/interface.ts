import { IDataItem } from '../dropdown/interface'

export type INavListItemProps = {
  item: IDataItem
  active?: boolean
  size: keyof typeof NavListItemSize
  onClick?: (value: string) => void
}

export enum NavListItemSize {
  sm = 'text-sm',
  md = 'text-md',
  lg = 'text-lg'
}

export type INavListProps = {
  data: IDataItem[]
  size?: keyof typeof NavListItemSize
  onClick?: (value: string) => void
}

import { IButtonProps } from '../button/interface'

export interface IDropdownProps extends IButtonProps {
    data: IDataItem[]
    onDropdownButtonClick?: (value: string) => void
}

export type IDataItem = {
    label: string
    value: string
}

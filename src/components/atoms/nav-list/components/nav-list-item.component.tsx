import clsx from 'clsx'
import React from 'react'

import { IDataItem } from '../../dropdown/interface'

type INavListItemProps = {
  item: IDataItem
  active?: boolean
  size: keyof typeof NavListItemSize
  onClick?: (value: string) => void
}

export const NavListItemSize = {
  sm: 'text-sm',
  md: 'text-md',
  lg: 'text-lg'
}

const NavListItem: React.FC<INavListItemProps> = ({ item, active, size, onClick }) => {
  return (
    <>
      <li
        onClick={() => onClick && onClick(item.value)}
        className={clsx(`${NavListItemSize[size]} menu-item`, { 'menu-active': active })}
      >
        {item.label}
      </li>
      <div className="divider my-0"></div>
    </>
  )
}

export default NavListItem

import clsx from 'clsx'
import React, { Fragment } from 'react'

import { INavListItemProps, NavListItemSize } from '@/types/components/atoms/navlist.type'

const NavListItem: React.FC<INavListItemProps> = ({ item, active, size, onClick }) => {
  return (
    <Fragment>
      <li
        onClick={() => onClick && onClick(item.value)}
        className={clsx(`${NavListItemSize[size]} menu-item`, { 'menu-active': active })}
      >
        {item.label}
      </li>
      <div className="divider my-0"></div>
    </Fragment>
  )
}

export default NavListItem

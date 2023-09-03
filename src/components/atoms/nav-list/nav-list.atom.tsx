import React from 'react'

import NavListItem, { NavListItemSize } from './components/nav-list-item.component'
import { IDataItem } from '../dropdown/interface'
import '@/assets/atoms/navlist.css'

type INavListProps = {
  data: IDataItem[]
  size?: keyof typeof NavListItemSize
}

const NavList: React.FC<INavListProps> = ({ data, size = 'md' }) => {
  return (
    <nav className="menu bg-gray-2 p-2 rounded-md">
      <section className="menu-section">
        <ul className="menu-items">
          {data.map((item, index) => (
            <NavListItem key={index} item={item} size={size} />
          ))}
        </ul>
      </section>
    </nav>
  )
}

export default NavList

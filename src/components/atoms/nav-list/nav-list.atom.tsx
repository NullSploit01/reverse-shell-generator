import React from 'react'

import '@/assets/atoms/navlist.css'
import { useShellContext } from '@/context/shell.context'
import { INavListProps } from '@/types/components/atoms/navlist.type'

import NavListItem from './components/nav-list-item.component'

const NavList: React.FC<INavListProps> = ({ data, size = 'md', onClick }) => {
  const { selectedShellCommand } = useShellContext()
  return (
    <nav className="menu bg-gray-2 p-2 rounded-md">
      <section className="menu-section">
        <ul className="menu-items">
          {data.map((item, index) => (
            <NavListItem
              key={index}
              item={item}
              onClick={onClick}
              active={selectedShellCommand.name === item.label}
              size={size}
            />
          ))}
        </ul>
      </section>
    </nav>
  )
}

export default NavList

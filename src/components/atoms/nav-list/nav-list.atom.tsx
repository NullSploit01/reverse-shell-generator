import React from 'react'

import '@/assets/atoms/navlist.css'
import { INavListProps } from '@/components/atoms/nav-list/interface'
import { useShellContext } from '@/context/shell.context'

import NavListItem from './components/nav-list-item.component'

const NavList: React.FC<INavListProps> = ({ data, size = 'md', onClick }) => {
  const { selectedShellCommand } = useShellContext()
  return (
    <nav className="menu bg-gray-2 p-2 rounded-md">
      <section className="menu-section">
        <ul className="menu-items">
          {data.length === 0 && <p className="text-center">Nope, Try Again!</p>}
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

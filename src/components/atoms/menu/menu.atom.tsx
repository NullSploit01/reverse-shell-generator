import React from 'react'

import MenuCollapseIcon from './components/menu-collapse-icon.component'
import MenuItem from './components/menu-item.component'
import { IMenuProps } from './interface'

const Menu: React.FC<IMenuProps> = ({ label, data, onClick }) => {
  const [collapsed, setCollapsed] = React.useState(false)

  return (
    <section className="menu-section">
      <div className="menu-items">
        <input
          type="checkbox"
          id={`menu`}
          className="menu-toggle"
          onClick={() => setCollapsed(!collapsed)}
        />
        <label tabIndex={-1} className="menu-item justify-between" htmlFor={`menu`}>
          <span>{label}</span>
          <MenuCollapseIcon />
        </label>

        <div className="menu-item-collapse">
          {collapsed && (
            <div className="min-h-0">
              {data.map((item, index) => {
                return (
                  <MenuItem onClick={onClick} key={index} label={item.label} value={item.value} />
                )
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Menu

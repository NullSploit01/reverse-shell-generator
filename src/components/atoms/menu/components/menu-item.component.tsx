import React from 'react'

import { IMenuItemProps } from '../interface'

const MenuItem: React.FC<IMenuItemProps> = ({ label, onClick, value }) => {
  return (
    <button onClick={() => onClick && onClick(value)} className="selected menu-item ml-6">
      {label}
    </button>
  )
}

export default MenuItem

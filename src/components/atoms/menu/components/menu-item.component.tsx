import React from 'react'

type IMenuItemProps = {
  label: string
  value: string
  onClick?: (value: string) => void
}

const MenuItem: React.FC<IMenuItemProps> = ({ label, onClick, value }) => {
  return (
    <a onClick={() => onClick && onClick(value)} className="selected menu-item ml-6">
      {label}
    </a>
  )
}

export default MenuItem

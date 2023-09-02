import React, { FC } from 'react'

import DropdownItem from './components/dropdown-item.component'
import '@/assets/atoms/dropdown.css'
import { IDropdownItem } from './interface'

type IDropdownProps = {
  label: string
  data: IDropdownItem[]
  onClick?: (value: string) => void
}

const Dropdown: FC<IDropdownProps> = ({ label, data, onClick }) => {
  return (
    <div className="dropdown">
      <label className="btn btn-solid-primary m-2" tabIndex={0}>
        {label}
      </label>
      <div className="dropdown-menu dropdown-menu-bottom-right">
        {data.map((item, index) => {
          return (
            <DropdownItem key={index} onClick={onClick} label={item.label} value={item.value} />
          )
        })}
      </div>
    </div>
  )
}

export default Dropdown

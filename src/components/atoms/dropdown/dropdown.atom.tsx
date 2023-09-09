import React, { FC } from 'react'

import '@/assets/atoms/dropdown.css'

import { IDropdownProps } from '@/components/atoms/dropdown/interface'

import DropdownItem from './components/dropdown-item.component'
import Button from '../button/button.atom'

const Dropdown: FC<IDropdownProps> = ({
  data,
  label,
  outline,
  solid,
  position = 'bottomRight',
  size = 'md',
  className = '',
  color = 'primary',
  onDropdownButtonClick
}) => {
  return (
    <div className="dropdown">
      <Button
        label={label}
        color={color}
        outline={outline}
        solid={solid}
        className={className}
        size={size}
      />
      <div className={`dropdown-menu ${position}`}>
        {data.map((item, index) => {
          return (
            <DropdownItem
              key={index}
              onClick={onDropdownButtonClick}
              label={item.label}
              value={item.value}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Dropdown

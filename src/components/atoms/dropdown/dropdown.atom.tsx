import React, { FC } from 'react'

import DropdownItem from './components/dropdown-item.component'
import '@/assets/atoms/dropdown.css'

import { IDataItem } from '@/types/components/atoms/data.type'
import { IButtonProps } from '@/types/components/atoms/button.type'

import Button from '../button/button.atom'

interface IDropdownProps extends IButtonProps {
  data: IDataItem[]
  onDropdownButtonClick?: (value: string) => void
}

const Dropdown: FC<IDropdownProps> = ({
  data,
  label,
  outline,
  solid,
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
      <div className="dropdown-menu dropdown-menu-bottom-right">
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

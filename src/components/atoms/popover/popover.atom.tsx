import React from 'react'

import { IPopoverProps, PopoverPositions } from '@/types/components/atoms/popover.type'

const Popover: React.FC<IPopoverProps> = ({ children, label, position = 'bottomLeft' }) => {
  return (
    <div className="popover">
      {children}
      <div className={`popover-content ${PopoverPositions[position]}`} tabIndex={0}>
        <div className="popover-arrow"></div>
        <div className="p-4 text-sm">{label}</div>
      </div>
    </div>
  )
}

export default Popover

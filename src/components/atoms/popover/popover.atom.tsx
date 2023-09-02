import React from 'react'

type IPopoverProps = {
  children: React.ReactNode
  label: string
  position?: keyof typeof PopoverPositions
}

const PopoverPositions = {
  topLeft: 'popover-top-left',
  topRight: 'popover-top-right',
  bottomLeft: 'popover-bottom-left',
  bottomRight: 'popover-bottom-right',
  leftTop: 'popover-left-top',
  leftBottom: 'popover-left-bottom',
  rightTop: 'popover-right-top',
  rightBottom: 'popover-right-bottom'
}

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

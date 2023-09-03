export type IPopoverProps = {
  children: React.ReactNode
  label: string
  position?: keyof typeof PopoverPositions
}

export enum PopoverPositions {
  topLeft = 'popover-top-left',
  topRight = 'popover-top-right',
  bottomLeft = 'popover-bottom-left',
  bottomRight = 'popover-bottom-right',
  leftTop = 'popover-left-top',
  leftBottom = 'popover-left-bottom',
  rightTop = 'popover-right-top',
  rightBottom = 'popover-right-bottom'
}

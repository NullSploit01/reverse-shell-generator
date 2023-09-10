import React, { FC } from 'react'

import { IBoxProps } from '@/components/atoms/box/interface'

const Box: FC<IBoxProps> = ({ children, className = '' }) => {
  return (
    <div className={`border border-black bg-neutral shadow-md p-5 ${className}`}>{children}</div>
  )
}

export default Box

import React, { FC } from 'react'

import { IBoxProps } from '@/components/atoms/box/interface'

const Box: FC<IBoxProps> = ({ children, className = '' }) => {
  return (
    <div className={`border border-black shadow-md bg-zinc-800 p-5 ${className}`}>{children}</div>
  )
}

export default Box

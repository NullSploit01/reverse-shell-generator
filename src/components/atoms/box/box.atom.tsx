import React, { FC } from 'react'

import { IBoxProps } from '@/types/components/atoms/box.type'

const Box: FC<IBoxProps> = ({ children, className = '' }) => {
  return (
    <div className={`border border-black shadow-md bg-zinc-800 p-5 mx-10 ${className}`}>
      {children}
    </div>
  )
}

export default Box

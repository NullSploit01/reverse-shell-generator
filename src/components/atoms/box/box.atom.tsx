import React, { FC } from 'react'

type IBoxProps = {
  children: React.ReactNode
  className?: string
}

const Box: FC<IBoxProps> = ({ children, className = '' }) => {
  return (
    <div className={`border border-black shadow-md bg-zinc-800 p-5 mx-10 ${className}`}>
      {children}
    </div>
  )
}

export default Box

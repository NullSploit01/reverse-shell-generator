import React, { FC } from 'react'

type IBoxProps = {
  children: React.ReactNode
}

const Box: FC<IBoxProps> = ({ children }) => {
  return (
    <div className="border border-black shadow-md bg-zinc-800 basis-1/2 p-5 mx-10">{children}</div>
  )
}

export default Box

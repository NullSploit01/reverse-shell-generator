import React from 'react'

import NavBar from '../organisms/navbar/navbar.organism'

type IMainContainerProps = {
  children: React.ReactNode
}

const MainContainer: React.FC<IMainContainerProps> = ({ children }) => {
  return (
    <main className="bg-zinc-950">
      <NavBar />
      <div className="px-20">{children}</div>
    </main>
  )
}

export default MainContainer

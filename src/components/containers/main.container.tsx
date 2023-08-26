import React from 'react'

import NavBar from '../organisms/navbar/navbar.organism'

type IMainContainerProps = {
  children: React.ReactNode
}

const MainContainer: React.FC<IMainContainerProps> = ({ children }) => {
  return (
    <main className="h-screen bg-gray-300">
      <NavBar />
      {children}
    </main>
  )
}

export default MainContainer

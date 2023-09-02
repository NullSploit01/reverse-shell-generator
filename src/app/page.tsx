'use client'

import React from 'react'

import MainContainer from '@/components/containers/main.container'
import IPPortListener from '@/components/organisms/ip-port-listener/ip-port-listener.organism'
import Shells from '@/components/organisms/shells/shells.organism'
import { IPPortContextProvider } from '@/context/ip-port.context'

const HomePage = () => {
  return (
    <IPPortContextProvider>
      <MainContainer>
        <div className="flex flex-row">
          <IPPortListener />
        </div>
        <div className="mt-10">
          <Shells />
        </div>
      </MainContainer>
    </IPPortContextProvider>
  )
}

export default HomePage

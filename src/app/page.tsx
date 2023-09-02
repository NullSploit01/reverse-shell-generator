'use client'

import React from 'react'

import MainContainer from '@/components/containers/main.container'
import IPPortListener from '@/components/organisms/ip-port-listener/ip-port-listener.organism'
import { IPPortContextProvider } from '@/context/ip-port.context'

const HomePage = () => {
  return (
    <IPPortContextProvider>
      <MainContainer>
        <div className="flex flex-row">
          <IPPortListener />
        </div>
      </MainContainer>
    </IPPortContextProvider>
  )
}

export default HomePage

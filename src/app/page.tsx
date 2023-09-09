'use client'

import React from 'react'

import MainContainer from '@/components/containers/main.container'
import IPPortListener from '@/components/organisms/ip-port-listener/ip-port-listener.organism'
import Shells from '@/components/organisms/shells/shells.organism'
import { IPPortContextProvider } from '@/context/ip-port.context'
import { ShellContextProvider } from '@/context/shell.context'

const HomePage = () => {
  return (
    <IPPortContextProvider>
      <ShellContextProvider>
        <MainContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <IPPortListener />
          </div>
          <div className="mt-10">
            <Shells />
          </div>
        </MainContainer>
      </ShellContextProvider>
    </IPPortContextProvider>
  )
}

export default HomePage

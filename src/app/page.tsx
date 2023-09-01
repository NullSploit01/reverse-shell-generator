'use client'

import React from 'react'

import MainContainer from '@/components/containers/main.container'
import IPPortListener from '@/components/organisms/ip-port-listener/ip-port-listener.organism'

const HomePage = () => {
  return (
    <MainContainer>
      <div className="flex flex-row">
        <IPPortListener />
      </div>
    </MainContainer>
  )
}

export default HomePage

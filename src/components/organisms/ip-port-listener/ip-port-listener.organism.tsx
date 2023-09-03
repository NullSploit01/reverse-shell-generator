import React, { Fragment } from 'react'

import Box from '@/components/atoms/box/box.atom'
import IPPort from '@/components/molecules/ip-port/ip-port.molecule'
import Listener from '@/components/molecules/listener/listener.molecule'

const IPPortListener = () => {
  return (
    <Fragment>
      <Box className="basis-1/2 ">
        <IPPort />
      </Box>
      <Box className="basis-1/2 ">
        <Listener />
      </Box>
    </Fragment>
  )
}

export default IPPortListener

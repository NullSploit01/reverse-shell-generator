import React, { Fragment } from 'react'

import Box from '@/components/atoms/box/box.atom'

import IPPort from './components/ip-port.component'
import Listener from './components/listener.component'

const IPPortListener = () => {
  return (
    <Fragment>
      <Box>
        <IPPort />
      </Box>
      <Box>
        <Listener />
      </Box>
    </Fragment>
  )
}

export default IPPortListener

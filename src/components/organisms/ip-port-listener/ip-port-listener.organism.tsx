import React, { Fragment } from 'react'

import Box from '@/components/atoms/box/box.atom'
import IPPort from '@/components/molecules/ip-port/ip-port.molecule'
import Listener from '@/components/molecules/listener/listener.molecule'

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

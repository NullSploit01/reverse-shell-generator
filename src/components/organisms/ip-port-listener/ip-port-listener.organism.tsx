import React, { Fragment, useState } from 'react'

import Box from '@/components/atoms/box/box.atom'
import Input from '@/components/atoms/input/input.atom'
import TextArea from '@/components/atoms/textarea/textarea.atom'

const IPPortListener = () => {
  const [ip, setIp] = useState<string>('127.0.0.1')
  const [port, setPort] = useState<string>('1337')

  return (
    <Fragment>
      <Box>
        <b className="text-xl">IP and Port</b>
        <div className="flex justify-center mt-4">
          <Input type="text" className="m-5" placeholder="IP" value={ip} />
          <Input type="number" className="m-5" placeholder="PORT" value={port} />
        </div>
      </Box>
      <Box>
        <b className="text-xl">Listener</b>
        <div className="flex justify-center mt-4">
          <TextArea value={port} />
        </div>
      </Box>
    </Fragment>
  )
}

export default IPPortListener

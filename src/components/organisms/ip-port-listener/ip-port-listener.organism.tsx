import React, { Fragment, useState } from 'react'

import Box from '@/components/atoms/box/box.atom'
import Input from '@/components/atoms/input/input.atom'

const IPPortListener = () => {
  const [ip, setIp] = useState<string>('127.0.0.1')
  const [port, setPort] = useState<string>('1337')

  return (
    <Fragment>
      <Box>
        <div className="basis-1/2">
          <b className="text-xl">IP and Port</b>
          <div className="flex justify-center mt-4">
            <Input type="text" className="m-5" placeholder="IP" value={ip} />
            <Input type="number" className="m-5" placeholder="PORT" value={port} />
          </div>
        </div>
      </Box>
      <Box>
        <div className="">
          <b className="text-xl">Listener</b>
          <div className="flex justify-center mt-4">
            <div className="justify-content-center row m-5">
              <div className="col-auto position-relative" style={{ minWidth: '15vw' }}>
                <div
                  className="bg-zinc-900 border-gray-900 mb-2 p-4 pl-5 text-break text-wrap"
                  contentEditable
                  spellCheck="false"
                >
                  python3 -m pwncat -lp <span className="highlighted-parameter">{port}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Fragment>
  )
}

export default IPPortListener

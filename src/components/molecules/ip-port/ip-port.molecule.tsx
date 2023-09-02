import React, { Fragment } from 'react'

import Input from '@/components/atoms/input/input.atom'
import { useIPPortContext } from '@/context/ip-port.context'

const IPPort = () => {
  const { ip, port, setIP, setPort } = useIPPortContext()

  const handleIPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // validate ip and update

    // const ipv4Pattern = /^(\d{1,3}\.){3}(\d{1,3})$/
    // const ipAddress = e.target.value

    // if (!ipv4Pattern.test(ipAddress)) {
    //   return
    // }

    setIP(e.target.value)
  }

  const handlePortChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const portToNumber = Number(e.target.value)

    if (portToNumber > 65535 || portToNumber < 0) {
      return
    }

    setPort(e.target.value)
  }

  return (
    <Fragment>
      <b className="text-xl">IP and Port</b>
      <div className="flex justify-center mt-4">
        <Input type="text" onChange={handleIPChange} className="m-5" placeholder="IP" value={ip} />
        <Input
          type="number"
          onChange={handlePortChange}
          className="m-5"
          placeholder="PORT"
          value={port}
        />
      </div>
    </Fragment>
  )
}

export default IPPort

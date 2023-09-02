import React, { Fragment } from 'react'

import Input from '@/components/atoms/input/input.atom'
import { useIPPortContext } from '@/context/ip-port.context'

const IPPort = () => {
  const { ip, port, setIP, setPort } = useIPPortContext()

  const [_isIpPortValid, setIsIpPortValid] = React.useState<{ ip: boolean; port: boolean }>({
    ip: true,
    port: true
  })

  const handleIPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const ipv4Pattern = /^(\d{1,3}\.){3}(\d{1,3})$/
    const ipAddress = e.target.value

    setIsIpPortValid({ ..._isIpPortValid, ip: ipv4Pattern.test(ipAddress) })

    setIP(e.target.value)
  }

  const handlePortChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const portToNumber = parseInt(e.target.value, 10)

    setIsIpPortValid({ ..._isIpPortValid, port: !(portToNumber > 65535 || portToNumber < 0) })

    setPort(portToNumber.toString())
  }

  return (
    <Fragment>
      <b className="text-xl">IP and Port</b>
      <div className="flex justify-center mt-4">
        <Input
          value={ip}
          type="text"
          className="m-5 text-center"
          placeholder="IP"
          onChange={handleIPChange}
          color={_isIpPortValid.ip ? 'primary' : 'error'}
        />
        <Input
          value={port}
          type="number"
          className="m-5 text-center"
          placeholder="PORT"
          onChange={handlePortChange}
          color={_isIpPortValid.port ? 'primary' : 'error'}
        />
      </div>
    </Fragment>
  )
}

export default IPPort

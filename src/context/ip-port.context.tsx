import { createContext, useContext, useState } from 'react'

import {
  IIPPortContextProps,
  IIPPortContextProviderProps,
  IIPPortValidation
} from '@/context/interface'
import { DefaultData } from '@/data/default.data'

const IPPortContext = createContext<IIPPortContextProps>({} as IIPPortContextProps)

export const IPPortContextProvider = ({ children }: IIPPortContextProviderProps) => {
  const [ip, setIP] = useState<string>(DefaultData.ipAddress)
  const [port, setPort] = useState<string>(DefaultData.port)
  const [isIpPortValid, setIsIpPortValid] = useState<IIPPortValidation>({
    ip: true,
    port: true
  })

  const changeIP = (ip: string) => {
    const ipv4Pattern = /^(\d{1,3}\.){3}(\d{1,3})$/
    setIsIpPortValid({ ...isIpPortValid, ip: ipv4Pattern.test(ip) })

    setIP(ip)
  }

  const changePort = (port: string) => {
    const portToNumber = parseInt(port, 10)
    setIsIpPortValid({ ...isIpPortValid, port: portToNumber < 65535 && portToNumber > 0 })

    setPort(portToNumber.toString())
  }

  return (
    <IPPortContext.Provider value={{ ip, port, isIpPortValid, changeIP, changePort }}>
      {children}
    </IPPortContext.Provider>
  )
}

export const useIPPortContext = () => {
  return useContext(IPPortContext)
}

import { ReactNode, createContext, useContext, useState } from 'react'

type IIPPortContextProps = {
  ip: string
  port: string
  setIP: (ip: string) => void
  setPort: (port: string) => void
}

type IIPPortContextProviderProps = {
  children: ReactNode
}

const IPPortContext = createContext<IIPPortContextProps>({} as IIPPortContextProps)

export const IPPortContextProvider = ({ children }: IIPPortContextProviderProps) => {
  const [ip, setIP] = useState<string>('127.0.0.1')
  const [port, setPort] = useState<string>('1337')

  return (
    <IPPortContext.Provider value={{ ip, port, setIP, setPort }}>{children}</IPPortContext.Provider>
  )
}

export const useIPPortContext = () => {
  return useContext(IPPortContext)
}

import { ReactNode } from 'react'

export type IIPPortContextProps = {
  ip: string
  port: string
  setIP: (ip: string) => void
  setPort: (port: string) => void
}

export type IIPPortContextProviderProps = {
  children: ReactNode
}

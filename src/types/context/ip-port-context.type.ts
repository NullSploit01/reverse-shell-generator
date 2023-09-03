import { ReactNode } from 'react'

export type IIPPortContextProps = {
  ip: string
  port: string
  isIpPortValid: IIPPortValidation
  changeIP: (ip: string) => void
  changePort: (port: string) => void
}

export type IIPPortContextProviderProps = {
  children: ReactNode
}

export type IIPPortValidation = { ip: boolean; port: boolean }

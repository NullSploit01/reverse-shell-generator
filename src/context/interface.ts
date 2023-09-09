import { ReactNode } from 'react'

import { IOS, IShell, IShellCommand, IShellType } from '@/data/interface'

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

export type IShellContext = {
  os: IOS
  shell: IShell
  shellCommands: IShellCommand[]
  shellType: IShellType
  selectedShellCommand: IShellCommand
  changeOS: (os: IOS) => void
  changeShell: (shell: IShell) => void
  changeShellType: (shellType: IShellType) => void
  changeSelectedShellCommand: (shellCommand: IShellCommand) => void
}

export type IShellContextProviderProps = {
  children: ReactNode
}

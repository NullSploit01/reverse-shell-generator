import { ReactNode } from 'react'

import { IOS, IShell, IShellCommand, IShellType } from '../data/shell.type'

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

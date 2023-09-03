import { ReactNode, createContext, useContext, useEffect, useState } from 'react'

import {
  IShell,
  IShellCommand,
  IShellType,
  SHELLS,
  SHELL_TYPES,
  getShellCommandsWithIpAndPort
} from '@/data/shells.data'

import { useIPPortContext } from './ip-port.context'

type IShellContext = {
  shell: IShell
  shellCommands: IShellCommand[]
  shellType: IShellType
  selectedShellCommand: IShellCommand
  changeShell: (shell: IShell) => void
  changeShellType: (shellType: IShellType) => void
  changeSelectedShellCommand: (shellCommand: IShellCommand) => void
}

type IShellContextProviderProps = {
  children: ReactNode
}

const ShellContext = createContext<IShellContext>({} as IShellContext)

export const ShellContextProvider = ({ children }: IShellContextProviderProps) => {
  const { ip, port } = useIPPortContext()

  const [shell, setShell] = useState<IShell>({} as IShell)
  const [shellCommands, setShellCommands] = useState<IShellCommand[]>([])
  const [shellType, setShellType] = useState<IShellType>({} as IShellType)
  const [selectedShellCommand, setSelectedShellCommand] = useState<IShellCommand>(
    {} as IShellCommand
  )

  useEffect(() => {
    //  ToDo: Update default shell from cache
    setShell(SHELLS[0])
    setShellType(SHELL_TYPES[0])
  }, [])

  useEffect(() => {
    const shellCommands = getShellCommandsWithIpAndPort(shell, ip, port, shellType.value)
    setSelectedShellCommand(shellCommands[0])
    setShellCommands(shellCommands as IShellCommand[])
  }, [shell, ip, port, shellType])

  const changeShell = (shell: IShell) => {
    setShell(shell)
  }

  const changeShellType = (shellType: IShellType) => {
    setShellType(shellType)
  }

  const changeSelectedShellCommand = (shellCommand: IShellCommand) => {
    setSelectedShellCommand(shellCommand)
  }

  return (
    <ShellContext.Provider
      value={{
        shell,
        shellType,
        shellCommands,
        selectedShellCommand,
        changeShell,
        changeShellType,
        changeSelectedShellCommand
      }}
    >
      {children}
    </ShellContext.Provider>
  )
}

export const useShellContext = () => {
  return useContext(ShellContext)
}

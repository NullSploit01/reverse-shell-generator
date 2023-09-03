import { ReactNode, createContext, useContext, useEffect, useState } from 'react'

import { IShell, IShellCommand, SHELLS, getShellCommandsWithIpAndPort } from '@/data/shells.data'

import { useIPPortContext } from './ip-port.context'

type IShellContext = {
  shellType: IShell
  shellCommands: IShellCommand[]
  selectedShellCommand: IShellCommand
  changeShellType: (shellType: IShell) => void
  changeSelectedShellCommand: (shellCommand: IShellCommand) => void
}

type IShellContextProviderProps = {
  children: ReactNode
}

const ShellContext = createContext<IShellContext>({} as IShellContext)

export const ShellContextProvider = ({ children }: IShellContextProviderProps) => {
  const { ip, port } = useIPPortContext()

  const [shellType, setShellType] = useState<IShell>({} as IShell)
  const [shellCommands, setShellCommands] = useState<IShellCommand[]>([])
  const [selectedShellCommand, setSelectedShellCommand] = useState<IShellCommand>(
    {} as IShellCommand
  )

  useEffect(() => {
    //  ToDo: Update default shell from cache
    setShellType(SHELLS[0])
  }, [])

  useEffect(() => {
    const shellCommands = getShellCommandsWithIpAndPort(shellType, ip, port)
    setSelectedShellCommand(shellCommands[0])
    setShellCommands(shellCommands as IShellCommand[])
  }, [shellType])

  const changeShellType = (shellType: IShell) => {
    setShellType(shellType)
  }

  const changeSelectedShellCommand = (shellCommand: IShellCommand) => {
    setSelectedShellCommand(shellCommand)
  }

  return (
    <ShellContext.Provider
      value={{
        shellType,
        shellCommands,
        selectedShellCommand,
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

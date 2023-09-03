import { ReactNode, createContext, useContext, useEffect, useState } from 'react'

import {
  IOS,
  IShell,
  IShellCommand,
  IShellType,
  OS,
  SHELLS,
  SHELL_TYPES,
  detectClientOS,
  getShellCommandsWithIpAndPort
} from '@/data/shells.data'

import { useIPPortContext } from './ip-port.context'

type IShellContext = {
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

type IShellContextProviderProps = {
  children: ReactNode
}

const ShellContext = createContext<IShellContext>({} as IShellContext)

export const ShellContextProvider = ({ children }: IShellContextProviderProps) => {
  const { ip, port } = useIPPortContext()

  const [os, setOs] = useState<IOS>({} as IOS)
  const [shell, setShell] = useState<IShell>({} as IShell)
  const [shellCommands, setShellCommands] = useState<IShellCommand[]>([])
  const [shellType, setShellType] = useState<IShellType>({} as IShellType)
  const [selectedShellCommand, setSelectedShellCommand] = useState<IShellCommand>(
    {} as IShellCommand
  )

  useEffect(() => {
    const detectedOs = OS.find((os) => os.value === detectClientOS())

    if (!detectedOs) return

    setOs(detectedOs)
    setShell(SHELLS[0])
    setShellType(SHELL_TYPES[0])
  }, [])

  useEffect(() => {
    const shellCommands = getShellCommandsWithIpAndPort(shell, ip, port, os, shellType)
    setSelectedShellCommand(shellCommands[0])
    setShellCommands(shellCommands as IShellCommand[])
  }, [shell, ip, port, shellType, os])

  const changeShell = (shell: IShell) => {
    setShell(shell)
  }

  const changeShellType = (shellType: IShellType) => {
    setShellType(shellType)
  }

  const changeSelectedShellCommand = (shellCommand: IShellCommand) => {
    setSelectedShellCommand(shellCommand)
  }

  const changeOS = (os: IOS) => {
    setOs(os)
  }

  return (
    <ShellContext.Provider
      value={{
        os,
        shell,
        shellType,
        shellCommands,
        selectedShellCommand,
        changeOS,
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

import { createContext, useContext, useEffect, useState } from 'react'

import { OS, SHELLS, SHELL_TYPES } from '@/data/shells.data'
import { IShellContext, IShellContextProviderProps } from '@/types/context/shell-context.type'
import { IOS, IShell, IShellCommand, IShellType } from '@/types/data/shell.type'
import { detectClientOS, getShellCommandsWithIpAndPort } from '@/utils/data.util'

import { useIPPortContext } from './ip-port.context'

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

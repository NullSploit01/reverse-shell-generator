import { createContext, useContext, useEffect, useMemo, useState } from 'react'

import { DefaultData } from '@/data/default.data'
import { IOS, IShell, IShellCommand, IShellType } from '@/data/interface'
import { OS } from '@/data/shells.data'
import { detectClientOS, getShellCommandsWithIpAndPort } from '@/utils/data.util'

import { IShellContext, IShellContextProviderProps } from './interface'
import { useIPPortContext } from './ip-port.context'

const ShellContext = createContext<IShellContext>({} as IShellContext)

export const ShellContextProvider = ({ children }: IShellContextProviderProps) => {
  const { ip, port } = useIPPortContext()

  const [os, setOs] = useState<IOS>(DefaultData.os)
  const [shell, setShell] = useState<IShell>(DefaultData.shell)
  const [shellCommands, setShellCommands] = useState<IShellCommand[]>([])
  const [shellType, setShellType] = useState<IShellType>(DefaultData.shellType)
  const [selectedShellCommand, setSelectedShellCommand] = useState<IShellCommand>(
    {} as IShellCommand
  )

  useEffect(() => {
    const detectedOs = OS.find((os) => os.value === detectClientOS())

    if (detectedOs) {
      changeOS(detectedOs)
    }
  }, [])

  useMemo(() => {
    const shellCommands = getShellCommandsWithIpAndPort(shell, ip, port, os, shellType)

    const currentSelectedShellCommand = shellCommands.find(
      (sh) => sh.name === selectedShellCommand.name
    )
    setSelectedShellCommand(currentSelectedShellCommand ?? shellCommands[0])
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

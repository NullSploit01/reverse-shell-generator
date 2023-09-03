import { ReactNode, createContext, useContext, useEffect, useState } from 'react'

import { IShell, IShellCommand, SHELLS, getShellCommandsWithIpAndPort } from '@/data/shells.data'

import { useIPPortContext } from './ip-port.context'

type IShellContext = {
  shellType: IShell
  shellCommands: IShellCommand[]
  changeShellType: (shellType: IShell) => void
}

type IShellContextProviderProps = {
  children: ReactNode
}

const ShellContext = createContext<IShellContext>({} as IShellContext)

export const ShellContextProvider = ({ children }: IShellContextProviderProps) => {
  const { ip, port } = useIPPortContext()

  const [shellType, setShellType] = useState<IShell>({} as IShell)
  const [shellCommands, setShellCommands] = useState<IShellCommand[]>([])

  useEffect(() => {
    //  ToDo: Update default shell from cache
    setShellType(SHELLS[0])
  }, [])

  useEffect(() => {
    const shellCommands = getShellCommandsWithIpAndPort(shellType, ip, port)
    setShellCommands(shellCommands as IShellCommand[])
  }, [shellType])

  const changeShellType = (shellType: IShell) => {
    setShellType(shellType)
  }

  return (
    <ShellContext.Provider
      value={{
        shellType,
        shellCommands,
        changeShellType
      }}
    >
      {children}
    </ShellContext.Provider>
  )
}

export const useShellContext = () => {
  return useContext(ShellContext)
}

import React, { useEffect, useRef } from 'react'

import Box from '@/components/atoms/box/box.atom'
import { IDataItem } from '@/components/atoms/dropdown/interface'
import NavList from '@/components/atoms/nav-list/nav-list.atom'
import ShellCode from '@/components/molecules/shell-code/shell-code.molecule'
import ShellHeader from '@/components/molecules/shell-header/shell-header.molecule'
import { useShellContext } from '@/context/shell.context'

const Shells = () => {
  const shellCommandsData = useRef<IDataItem[]>([])
  const { shellCommands, selectedShellCommand, changeSelectedShellCommand, os, shellType, shell } =
    useShellContext()

  const [filteredShellCommands, setFilteredShellCommands] = React.useState<IDataItem[]>([])

  useEffect(() => {
    const mappedShellCommandsData = shellCommands.map((shellCommand) => ({
      label: shellCommand.name,
      value: shellCommand.command
    }))

    shellCommandsData.current = mappedShellCommandsData
    setFilteredShellCommands(mappedShellCommandsData)
  }, [os, shellType, shell])

  const handleSearchQueryChange = (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setFilteredShellCommands(shellCommandsData.current)
      updateShellCommand(shellCommandsData.current[0].value)
      return
    }

    const filteredShellCommandsData = shellCommandsData.current.filter((shellCommand) =>
      shellCommand.label.toLowerCase().includes(searchQuery.toLowerCase())
    )

    if (filteredShellCommandsData.length === 0) {
      updateShellCommand('Not found')
    }

    setFilteredShellCommands(filteredShellCommandsData)
  }

  const updateShellCommand = (shellCommand: string) => {
    const selectedShellCommand = shellCommands.find(
      (shellCommandItem) => shellCommandItem.command === shellCommand
    )

    if (selectedShellCommand) {
      changeSelectedShellCommand(selectedShellCommand)
    } else {
      changeSelectedShellCommand({
        name: 'Such Empty',
        command: 'Wow, Such Empty',
        language: 'bash',
        meta: ['windows', 'linux', 'mac']
      })
    }
  }

  return (
    <Box>
      <ShellHeader onSearchQueryChange={handleSearchQueryChange} />
      <div className="lg:flex">
        <div className="lg:w-1/4 lg:px-4 py-4 px-2">
          <NavList onClick={updateShellCommand} data={filteredShellCommands} size="lg" />
        </div>
        <Box className="lg:w-3/4 lg:px-4 py-4 px-2 positiion-relative overflow-hidden">
          <ShellCode
            name={selectedShellCommand?.name}
            code={selectedShellCommand?.command}
            language={selectedShellCommand?.language}
          />
        </Box>
      </div>
    </Box>
  )
}

export default Shells

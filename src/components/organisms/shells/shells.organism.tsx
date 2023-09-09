import React from 'react'

import Box from '@/components/atoms/box/box.atom'
import NavList from '@/components/atoms/nav-list/nav-list.atom'
import ShellCode from '@/components/molecules/shell-code/shell-code.molecule'
import ShellsHeader from '@/components/molecules/shells-header/shells-header.molecule'
import { useShellContext } from '@/context/shell.context'

const Shells = () => {
  const { shellCommands, selectedShellCommand, changeSelectedShellCommand } = useShellContext()

  const shellCommandsData = shellCommands.map((shellCommand) => ({
    label: shellCommand.name,
    value: shellCommand.command
  }))

  const onChangeShellCommand = (shellCommand: string) => {
    const selectedShellCommand = shellCommands.find(
      (shellCommandItem) => shellCommandItem.command === shellCommand
    )
    if (selectedShellCommand) {
      changeSelectedShellCommand(selectedShellCommand)
    }
  }

  return (
    <Box>
      <ShellsHeader />
      <div className="lg:flex">
        <div className="lg:w-1/4 lg:px-4 py-4 px-2">
          <NavList onClick={onChangeShellCommand} data={shellCommandsData} size="lg" />
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

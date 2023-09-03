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
      <div className="flex flex-row mt-5">
        <div className="basis-1/5">
          <NavList onClick={onChangeShellCommand} data={shellCommandsData} size="lg" />
        </div>
        <Box className="basis-4/5 positiion-relative">
          <ShellCode
            code={selectedShellCommand?.command}
            language={selectedShellCommand?.language}
          />
        </Box>
      </div>
    </Box>
  )
}

export default Shells

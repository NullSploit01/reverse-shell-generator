import React from 'react'

import Box from '@/components/atoms/box/box.atom'
import NavList from '@/components/atoms/nav-list/nav-list.atom'
import ShellsHeader from '@/components/molecules/shells-header/shells-header.molecule'
import { useShellContext } from '@/context/shell.context'

const Shells = () => {
  const { shellCommands } = useShellContext()

  const shellCommandsData = shellCommands.map((shellCommand) => ({
    label: shellCommand.name,
    value: shellCommand.command
  }))

  return (
    <Box>
      <ShellsHeader />
      <div className="flex flex-row mt-5">
        <div className="basis-1/5">
          <NavList data={shellCommandsData} size="lg" />
        </div>
        <Box className="basis-4/5 ">as</Box>
      </div>
    </Box>
  )
}

export default Shells

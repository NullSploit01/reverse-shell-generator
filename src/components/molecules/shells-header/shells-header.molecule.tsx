import React from 'react'

import Dropdown from '@/components/atoms/dropdown/dropdown.atom'
import Input from '@/components/atoms/input/input.atom'
import { useShellContext } from '@/context/shell.context'
import { SHELLS } from '@/data/shells.data'

const ShellsHeader = () => {
  const { shellType, changeShellType } = useShellContext()

  const onShellTypeChange = (key: string) => {
    const shell = SHELLS.find((commandType) => commandType.value === key)
    if (!shell) return

    changeShellType(shell)
  }

  return (
    <div className="flex justify-between items-center px-5">
      <div className="flex">
        <h1 className="text-2xl font-bold mr-5">{shellType.label}</h1>
        <Dropdown
          label="Change"
          size="sm"
          outline
          color="warning"
          data={SHELLS}
          onDropdownButtonClick={onShellTypeChange}
        />
      </div>
      <Input type="search" color="secondary" placeholder="Search" />
    </div>
  )
}

export default ShellsHeader

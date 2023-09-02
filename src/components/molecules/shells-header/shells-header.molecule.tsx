import React, { useEffect } from 'react'

import Dropdown from '@/components/atoms/dropdown/dropdown.atom'
import { IDropdownItem } from '@/components/atoms/dropdown/interface'
import Input from '@/components/atoms/input/input.atom'
import { COMMAND_TYPES } from '@/data/shells.data'

const ShellsHeader = () => {
  const [_commandType, setCommandType] = React.useState<IDropdownItem>({ label: '', value: '' })

  useEffect(() => {
    setCommandType(COMMAND_TYPES[0])
  }, [])

  const onCommandTypeChange = (key: string) => {
    const commandType = COMMAND_TYPES.find((commandType) => commandType.value === key)
    setCommandType(commandType as IDropdownItem)
  }

  return (
    <div className="flex justify-between items-center px-5">
      <div className="flex">
        <h1 className="text-2xl font-bold mr-5">{_commandType.label}</h1>
        <Dropdown
          label="Change"
          size="sm"
          outline
          color="warning"
          data={COMMAND_TYPES}
          onDropdownButtonClick={onCommandTypeChange}
        />
      </div>
      <Input type="search" color="secondary" placeholder="Search" />
    </div>
  )
}

export default ShellsHeader

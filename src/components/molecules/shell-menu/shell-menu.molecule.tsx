import React from 'react'

import Dropdown from '@/components/atoms/dropdown/dropdown.atom'
import Input from '@/components/atoms/input/input.atom'
import Menu from '@/components/atoms/menu/menu.atom'
import { useShellContext } from '@/context/shell.context'
import { OS } from '@/data/shells.data'

const ShellMenu = () => {
  const { os, changeOS } = useShellContext()

  const handleClick = (value: string) => {
    const selectedOS = OS.find((item) => item.value === value)
    if (selectedOS) {
      changeOS(selectedOS)
    }
  }

  return (
    <Dropdown
      outline
      size="sm"
      position="bottomLeft"
      color="secondary"
      label="≡"
      data={[
        {
          label: <Input type="search" color="secondary" placeholder="Search" />,
          value: 'search'
        },
        {
          label: <Menu label={`OS: ${os.label}`} onClick={handleClick} data={OS} />,
          value: 'search'
        }
      ]}
    />
  )
}

export default ShellMenu

import React from 'react'

import Dropdown from '@/components/atoms/dropdown/dropdown.atom'
import Menu from '@/components/atoms/menu/menu.atom'
import { useShellContext } from '@/context/shell.context'
import { OS } from '@/data/shells.data'

import SearchBar from '../../atoms/search-bar/search-bar.atom'

type IShellMenuProps = {
  onSearchQueryChange: (value: string) => void
}

const ShellMenu: React.FC<IShellMenuProps> = ({ onSearchQueryChange }) => {
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
          label: <SearchBar onChange={onSearchQueryChange} />,
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

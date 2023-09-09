import React from 'react'

import Dropdown from '@/components/atoms/dropdown/dropdown.atom'
import { useShellContext } from '@/context/shell.context'
import { OS, SHELLS, SHELL_TYPES } from '@/data/shells.data'

import SearchBar from '../../atoms/search-bar/search-bar.atom'
import ShellMenu from '../shell-menu/shell-menu.molecule'

type IShellHeaderProps = {
  onSearchQueryChange: (value: string) => void
}

const ShellsHeader: React.FC<IShellHeaderProps> = ({ onSearchQueryChange }) => {
  const { os, changeOS, shell, changeShell, shellType, changeShellType } = useShellContext()

  const onShellChange = (key: string) => {
    const shell = SHELLS.find((commandType) => commandType.value === key)
    if (!shell) return

    changeShell(shell)
  }

  const onShellTypeChange = (key: string) => {
    const shellType = SHELL_TYPES.find((shellType) => shellType.value === key)
    if (!shellType) return

    changeShellType(shellType)
  }

  const onOSChange = (key: string) => {
    const os = OS.find((os) => os.value === key)
    if (!os) return

    changeOS(os)
  }

  return (
    <nav className="px-2 my-2 md:my-5 md:px-5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="lg:text-2xl font-bold lg:mr-5 mr-2">{shell.label}</h1>
          <Dropdown
            label="Change"
            size="xs"
            outline
            color="warning"
            data={SHELLS}
            onDropdownButtonClick={onShellChange}
          />
        </div>
        <div className="md:hidden">
          <ShellMenu onSearchQueryChange={onSearchQueryChange} />
        </div>
        <div className="md:flex hidden">
          <ul className="md:flex space-x-4">
            <span>
              <Dropdown
                solid
                label={`Shell: ${shellType.label}`}
                onDropdownButtonClick={onShellTypeChange}
                data={SHELL_TYPES}
              />
            </span>
            <span>
              <Dropdown
                solid
                label={`OS: ${os.label}`}
                onDropdownButtonClick={onOSChange}
                data={OS}
              />
            </span>
            <span>
              <SearchBar onChange={onSearchQueryChange} />
            </span>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default ShellsHeader

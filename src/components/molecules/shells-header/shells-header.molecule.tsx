import React from 'react'

import Dropdown from '@/components/atoms/dropdown/dropdown.atom'
import Input from '@/components/atoms/input/input.atom'
import { useShellContext } from '@/context/shell.context'
import { OS, SHELLS, SHELL_TYPES } from '@/data/shells.data'

const ShellsHeader = () => {
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
        <div className="flex justify-between items-center px-5">
            <div className="flex">
                <h1 className="text-2xl font-bold mr-5">{shell.label}</h1>
                <Dropdown
                    label="Change"
                    size="sm"
                    outline
                    color="warning"
                    data={SHELLS}
                    onDropdownButtonClick={onShellChange}
                />
            </div>
            <Dropdown
                solid
                label={`Shell: ${shellType.label}`}
                onDropdownButtonClick={onShellTypeChange}
                data={SHELL_TYPES}
            />
            <Dropdown
                solid
                label={`OS: ${os.label}`}
                onDropdownButtonClick={onOSChange}
                data={OS}
            />
            <Input type="search" color="secondary" placeholder="Search" />
        </div>
    )
}

export default ShellsHeader

import { SupportedOS, Shells, IShell, IOS, IShellType } from '@/data/interface'
import { LISTENER_COMMANDS } from '@/data/listeners.data'
import { REVERSE_SHELLS, BIND_SHELLS, MSFVENOM_SHELLS, HOAX_SHELLS } from '@/data/shells.data'

export const getListenerCommand = (type: string, port: string, ip: string) => {
    const command = LISTENER_COMMANDS.find((item) => item.key === type)?.value

    if (!command) {
        return ''
    }

    return command.replace('{port}', port).replace('{ip}', ip)
}

export const detectClientOS = () => {
    const userAgent = window.navigator.userAgent.toLowerCase()

    if (userAgent.includes('win')) {
        return SupportedOS.Windows
    } else if (userAgent.includes('linux')) {
        return SupportedOS.Linux
    } else if (userAgent.includes('mac')) {
        return SupportedOS.Mac
    } else {
        return '*'
    }
}

export const getShells = (type: string, os = '*') => {
    switch (type) {
        case Shells.ReverseShell:
            return REVERSE_SHELLS.sort((a, b) => a.name.localeCompare(b.name)).filter(
                (sh) => sh.meta.includes(os) || os === '*'
            )

        case Shells.BindShell:
            return BIND_SHELLS.sort((a, b) => a.name.localeCompare(b.name)).filter(
                (sh) => sh.meta.includes(os) || os === '*'
            )

        case Shells.MSFVenomShell:
            return MSFVENOM_SHELLS.sort((a, b) => a.name.localeCompare(b.name)).filter(
                (sh) => sh.meta.includes(os) || os === '*'
            )

        case Shells.HoaxShell:
            return HOAX_SHELLS.sort((a, b) => a.name.localeCompare(b.name)).filter(
                (sh) => sh.meta.includes(os) || os === '*'
            )

        default:
            return []
    }
}

export const getShellCommandsWithIpAndPort = (
    shell: IShell,
    ip: string,
    port: string,
    os: IOS,
    shellType: IShellType
) => {
    const shells = getShells(shell.value, os.value)

    return shells.map((shell) => {
        return {
            ...shell,
            command: shell.command
                .replace(/{ip}/g, ip)
                .replace(/{port}/g, port)
                .replace(/{shell}/g, shellType.value)
        }
    })
}

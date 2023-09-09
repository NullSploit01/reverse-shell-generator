export type IListenerType = {
    label: string
    value: string
}

export type IListenerCommand = {
    [value: string]: string
}

export type IShellCommand = {
    name: string
    command: string
    meta: string[]
    language: string
}

export type IShell = {
    label: string
    value: keyof typeof Shells
}

export type IShellType = {
    label: string
    value: string
}

export type IOS = {
    label: string
    value: string
}

export enum Shells {
    ReverseShell = 'ReverseShell',
    BindShell = 'BindShell',
    MSFVenomShell = 'MSFVenomShell',
    HoaxShell = 'HoaxShell'
}

export enum SupportedOS {
    Linux = 'linux',
    Mac = 'mac',
    Windows = 'windows'
}

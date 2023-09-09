import { LISTENER_TYPES } from './listeners.data'
import { OS, SHELLS, SHELL_TYPES } from './shells.data'

export const DefaultData = {
    port: '1337',
    shell: SHELLS[0],
    ipAddress: '127.0.0.1',
    listener: LISTENER_TYPES[0],
    shellType: SHELL_TYPES[0],
    os: OS[3]
}

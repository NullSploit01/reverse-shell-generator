import React, { Fragment, useEffect } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import Dropdown from '@/components/atoms/dropdown/dropdown.atom'
import Popover from '@/components/atoms/popover/popover.atom'
import TextArea from '@/components/atoms/textarea/textarea.atom'
import { useIPPortContext } from '@/context/ip-port.context'
import { IListenerType, LISTENER_TYPES, getListenerCommand } from '@/data/listeners.data'

const Listener = () => {
  const { port, ip } = useIPPortContext()

  const [_listener, setListener] = React.useState<IListenerType>({} as IListenerType)
  const [_listenerCommand, setListenerCommand] = React.useState<string>('')

  useEffect(() => {
    setListener(LISTENER_TYPES[0])
  }, [])

  useEffect(() => {
    const command = getListenerCommand(_listener.value, port, ip)
    setListenerCommand(command)
  }, [_listener, port, ip])

  const onListenerChange = (key: string) => {
    const listener = LISTENER_TYPES.find((listener) => listener.value === key)

    if (listener) {
      setListener(listener)
    }
  }

  return (
    <Fragment>
      <b className="text-xl">Listener</b>
      <div className="flex flex-col justify-center mt-4">
        <TextArea value={_listenerCommand} />
        <div className="flex justify-between">
          <Dropdown
            data={LISTENER_TYPES}
            label={`Type: ${_listener.label}`}
            onClick={onListenerChange}
          />

          <Popover label="Copied to Clipboard">
            <CopyToClipboard text={_listenerCommand}>
              <button className="popover-trigger btn btn-outline-success m-2">Copy</button>
            </CopyToClipboard>
          </Popover>
        </div>
      </div>
    </Fragment>
  )
}

export default Listener

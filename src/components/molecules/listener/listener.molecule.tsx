import React, { Fragment, useMemo } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import Button from '@/components/atoms/button/button.atom'
import Dropdown from '@/components/atoms/dropdown/dropdown.atom'
import Popover from '@/components/atoms/popover/popover.atom'
import TextArea from '@/components/atoms/textarea/textarea.atom'
import { useIPPortContext } from '@/context/ip-port.context'
import { DefaultData } from '@/data/default.data'
import { LISTENER_TYPES } from '@/data/listeners.data'
import { IListenerType } from '@/types/data/listener.type'
import { getListenerCommand } from '@/utils/data.util'

const Listener = () => {
  const { port, ip } = useIPPortContext()

  const [_listener, setListener] = React.useState<IListenerType>(DefaultData.listener)
  const [_listenerCommand, setListenerCommand] = React.useState<string>('')

  useMemo(() => {
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
            solid
            className="m-2"
            data={LISTENER_TYPES}
            label={`Type: ${_listener.label}`}
            onDropdownButtonClick={onListenerChange}
          />
          <Popover label="Copied to Clipboard">
            <CopyToClipboard text={_listenerCommand}>
              <Button outline color="success" label="Copy" className="popover-trigger m-2" />
            </CopyToClipboard>
          </Popover>
        </div>
      </div>
    </Fragment>
  )
}

export default Listener

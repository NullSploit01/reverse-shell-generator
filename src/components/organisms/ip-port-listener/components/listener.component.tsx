import React, { Fragment } from 'react'

import Dropdown from '@/components/atoms/dropdown/dropdown.atom'
import TextArea from '@/components/atoms/textarea/textarea.atom'
import { useIPPortContext } from '@/context/ip-port.context'
import { IListenerType, LISTENER_TYPES } from '@/data/listeners.data'

const Listener = () => {
  const { port } = useIPPortContext()

  const [listener, setListener] = React.useState<IListenerType>(LISTENER_TYPES[0])

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
        <TextArea value={port} />
        <div className="flex justify-between">
          <Dropdown
            data={LISTENER_TYPES}
            label={`Type ${listener.label}`}
            onClick={onListenerChange}
          />
          <button>Copy</button>
        </div>
      </div>
    </Fragment>
  )
}

export default Listener

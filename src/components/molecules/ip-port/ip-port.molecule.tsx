import React, { Fragment } from 'react'

import Input from '@/components/atoms/input/input.atom'
import { useIPPortContext } from '@/context/ip-port.context'

const IPPort = () => {
    const { ip, port, isIpPortValid, changeIP, changePort } = useIPPortContext()

    const handleIPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeIP(e.target.value)
    }

    const handlePortChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        changePort(e.target.value)
    }

    return (
        <Fragment>
            <b className="text-xl">IP and Port</b>
            <div className="flex mt-4">
                <Input
                    value={ip}
                    type="text"
                    className="m-5 text-center"
                    placeholder="IP"
                    onChange={handleIPChange}
                    color={isIpPortValid.ip ? 'primary' : 'error'}
                />
                <Input
                    value={port}
                    type="number"
                    className="m-5 text-center"
                    placeholder="PORT"
                    onChange={handlePortChange}
                    color={isIpPortValid.port ? 'primary' : 'error'}
                />
            </div>
        </Fragment>
    )
}

export default IPPort

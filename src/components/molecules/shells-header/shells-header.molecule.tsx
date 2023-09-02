import React from 'react'

import Button from '@/components/atoms/button/button.atom'
import Input from '@/components/atoms/input/input.atom'

const ShellsHeader = () => {
  return (
    <div className="flex justify-between items-center px-5">
      <div className="flex">
        <h1 className="text-2xl font-bold mr-5">Reverse Shells</h1>
        <Button label="Change" size="sm" outline color="warning" />
      </div>
      <Input type="search" color="secondary" placeholder="Search" />
    </div>
  )
}

export default ShellsHeader

import React from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'

import Button from '@/components/atoms/button/button.atom'
import Popover from '@/components/atoms/popover/popover.atom'

import { ICopyButtonProps } from './interface'

const CopyButton: React.FC<ICopyButtonProps> = ({
  label,
  textToCopy,
  message = 'Copied to Clipboard'
}) => {
  return (
    <Popover label={message}>
      <CopyToClipboard text={textToCopy}>
        <Button outline color="success" label={label} className="popover-trigger m-2" />
      </CopyToClipboard>
    </Popover>
  )
}

export default CopyButton

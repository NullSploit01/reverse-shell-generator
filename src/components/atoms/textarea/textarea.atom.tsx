import React, { FC } from 'react'

import { ITextAreaProps } from '@/types/components/atoms/textarea.type'

const TextArea: FC<ITextAreaProps> = ({ value }) => {
  return (
    <div className="row m-5">
      <div className="col-auto position-relative">
        <div
          className="bg-zinc-900 mb-2 p-4 pl-5 text-break text-wrap flex justify-center align-middle"
          contentEditable
          suppressContentEditableWarning
          spellCheck="false"
          style={{ outline: 'none', fontSize: '1rem', borderRadius: '1rem' }}
        >
          {value}
        </div>
      </div>
    </div>
  )
}

export default TextArea

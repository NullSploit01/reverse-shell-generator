import React, { FC } from 'react'

type ITextAreaProps = {
  value?: string
}

const TextArea: FC<ITextAreaProps> = ({ value }) => {
  return (
    <div className="justify-content-center row m-5">
      <div className="col-auto position-relative" style={{ minWidth: '15vw' }}>
        <div
          className="bg-zinc-900 border-gray-900 mb-2 p-4 pl-5 text-break text-wrap"
          contentEditable
          spellCheck="false"
          style={{ outline: 'none', fontSize: '1rem' }}
        >
          {value}
        </div>
      </div>
    </div>
  )
}

export default TextArea

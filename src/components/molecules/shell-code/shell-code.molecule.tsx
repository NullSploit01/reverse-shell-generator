import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import { IShellCodeProps } from '@/types/components/molecules/shell-code.type'

const ShellCode: React.FC<IShellCodeProps> = ({ code, language = 'bash' }) => {
  return (
    <div
      style={{ whiteSpace: 'pre-wrap', overflow: 'auto', maxHeight: '500px' }}
      className="text-break"
    >
      <SyntaxHighlighter language={language} wrapLongLines style={dark}>
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

export default ShellCode

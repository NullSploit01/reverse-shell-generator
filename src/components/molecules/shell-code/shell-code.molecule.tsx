import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

type IShellCodeProps = {
  code: string
  language?: string
}

const ShellCode: React.FC<IShellCodeProps> = ({ code, language = 'php' }) => {
  return (
    <div
      style={{ whiteSpace: 'pre-wrap', overflow: 'auto', maxHeight: '500px' }}
      className="text-break"
    >
      <SyntaxHighlighter language={language} showLineNumbers wrapLongLines style={dark}>
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

export default ShellCode

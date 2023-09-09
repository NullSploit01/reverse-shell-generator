import debounce from 'lodash.debounce'
import React, { ChangeEvent, useEffect, useMemo } from 'react'

import Input from '@/components/atoms/input/input.atom'

type ISearchBarProps = {
  onChange: (value: string) => void
}

const SearchBar: React.FC<ISearchBarProps> = ({ onChange }) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  const debouncedResults = useMemo(() => {
    return debounce(handleInputChange, 300)
  }, [])

  useEffect(() => {
    return () => {
      debouncedResults.cancel()
    }
  })

  return (
    <Input
      type="search"
      onChange={debouncedResults}
      color="secondary"
      placeholder="Search Shells"
    />
  )
}

export default SearchBar

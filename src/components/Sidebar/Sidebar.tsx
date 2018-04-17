import * as React from 'react'
import { CheckBox } from '../CheckBox'
import {
  SERIF,
  SANS_SERIF,
  MONOSPACE,
  TypeFilters,
  FontTypes,
} from '../../types'

interface Props {
  filters: {
    types: TypeFilters
    searchTerm: string
  }
  onTypeFilterChange: (
    type: FontTypes,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void
  onSearchTermChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Sidebar = (props: Props) => {
  const { onTypeFilterChange, onSearchTermChange, filters } = props
  return (
    <aside>
      <input
        type="text"
        value={filters.searchTerm}
        onChange={onSearchTermChange}
      />
      <CheckBox
        label="sans serif"
        value={filters.types.sansSerif}
        onChange={e => {
          onTypeFilterChange(SANS_SERIF, e)
        }}
      />
      <CheckBox
        label="serif"
        value={filters.types.serif}
        onChange={e => {
          onTypeFilterChange(SERIF, e)
        }}
      />
      <CheckBox
        label="monospace"
        value={filters.types.monospace}
        onChange={e => {
          onTypeFilterChange(MONOSPACE, e)
        }}
      />
    </aside>
  )
}

export { Sidebar }

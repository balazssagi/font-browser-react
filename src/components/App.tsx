import * as React from 'react'
import FontCardContainer from './FontCardContainer'
import CheckBox from './CheckBox'

export type FontTypes = 'serif' | 'sansSerif' | 'monospace'

export const SERIF: FontTypes = 'serif'
export const SANS_SERIF: FontTypes = 'sansSerif'
export const MONOSPACE: FontTypes = 'monospace'

export interface TypeFilters {
  [SERIF]: boolean
  [SANS_SERIF]: boolean
  [MONOSPACE]: boolean
}

interface State {
  filters: {
    searchTerm: string
    types: TypeFilters
  }
}

class App extends React.Component<{}, State> {
  state = {
    filters: {
      searchTerm: '',
      types: {
        serif: true,
        sansSerif: true,
        monospace: true,
      },
    },
  }

  handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFilters = Object.assign({}, this.state.filters)
    newFilters.searchTerm = e.target.value
    this.setState({
      filters: newFilters,
    })
  }

  handleTypeFilterChange = (type: FontTypes, e: React.ChangeEvent<HTMLInputElement>) => {
    const newTypes = Object.assign({}, this.state.filters.types)

    newTypes[type] = e.target.checked

    this.setState({
      filters: {
        ...this.state.filters,
        types: newTypes,
      },
    })
  }

  render() {
    const { filters } = this.state

    return (
      <div>
        <p>{JSON.stringify(this.state)}</p>
        <CheckBox
          label="sans serif"
          value={filters.types.sansSerif}
          onChange={(e) => {this.handleTypeFilterChange(SANS_SERIF, e)}}
        />
        <CheckBox
          label="serif"
          value={filters.types.serif}
          onChange={(e) => {this.handleTypeFilterChange(SERIF, e)}}
        />
        <CheckBox
          label="monospace"
          value={filters.types.monospace}
          onChange={(e) => {this.handleTypeFilterChange(MONOSPACE, e)}}
        />
        <input type="text" value={filters.searchTerm} onChange={this.handleSearchTermChange}/>
        <FontCardContainer filters={filters} />
      </div>
    )
  }
}

export default App

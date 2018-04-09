import * as React from 'react'
import FontCardContainer from './FontCardContainer'

export interface TypeFilters {
  serif: boolean
  sansSerif: boolean
  monospace: boolean
}

export type FontTypes = 'serif' | 'sansSerif' | 'monospace'

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

  handleTypeFilterChange = (type: FontTypes) => {
    const newTypes = Object.assign({}, this.state.filters.types)

    newTypes[type] = !this.state.filters.types[type]

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
        <button
          onClick={() => {
            this.handleTypeFilterChange('serif')
          }}
        >
          hello
        </button>
        <input type="text" value={filters.searchTerm} onChange={this.handleSearchTermChange}/>
        <FontCardContainer filters={filters} />
      </div>
    )
  }
}

export default App

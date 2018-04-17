import * as React from 'react'
import { FontCardContainer } from '../FontCardContainer'
import { Sidebar } from '../Sidebar'
import { TypeFilters, FontTypes } from '../../types'
import './app.css'

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

  handleTypeFilterChange = (
    type: FontTypes,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
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
      <div className="app">
        <Sidebar
          onTypeFilterChange={this.handleTypeFilterChange}
          onSearchTermChange={this.handleSearchTermChange}
          filters={filters}
        />
        <FontCardContainer filters={filters} />
      </div>
    )
  }
}

export { App }

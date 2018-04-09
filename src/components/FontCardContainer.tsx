import * as React from 'react'
import { TypeFilters, FontTypes } from './App'
import FontCard from './FontCard'

interface Props {
  filters: {
    searchTerm: string
    types: TypeFilters
  }
}

export interface Font {
  name: string
  type: FontTypes
}

interface State {
  fonts: Font[]
}

class FontCardContainer extends React.Component<Props, State> {
  state = {
    fonts: [],
  }

  async fetchFonts(): Promise<Font[]> {
    return new Promise<Font[]>((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            name: 'open sans',
            type: 'serif',
          },
          {
            name: 'roboto',
            type: 'sansSerif',
          },
        ])
      },         1500)
    })
  }

  getFilteredFonts = () => {
    return this.state.fonts.filter((font: Font) => {
      const { filters } = this.props
      return (
        filters.types[font.type] === true &&
        font.name.indexOf(filters.searchTerm.toLowerCase()) !== -1
      )
    })
  }

  async componentDidMount() {
    const fonts = await this.fetchFonts()
    this.setState({
      fonts,
    })
  }

  render() {
    return this.getFilteredFonts().map((font: Font) => (
      <FontCard key={font.name} font={font} />
    ))
  }
}

export default FontCardContainer

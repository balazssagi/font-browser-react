import * as React from 'react'
import { TypeFilters } from '../types'
import FontCard from './FontCard'
import { Font } from '../types'
import data from '../fonts'

interface Props {
  filters: {
    searchTerm: string
    types: TypeFilters
  }
}

interface State {
  fonts: Font[]
}

class FontCardContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      fonts: [],
    }
  }

  async fetchFonts(): Promise<Font[]> {
    return new Promise<Font[]>((resolve, reject) => {
      setTimeout(() => {
        resolve(data)
      }, 1500)
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

  appendStyleTags() {
    this.state.fonts.forEach(font => {
      const styleEl = document.createElement('style')
      styleEl.textContent = `
        ${font.styles.map(
          style => `
            @font-face {
              font-family: '${font.name}';
              font-style: ${style.style}
              font-weight: ${style.weight};
              src: url('${style.url}');
            }`
        )}
      `
      document.getElementsByTagName('head')[0].appendChild(styleEl)
    })
  }

  async componentDidMount() {
    const fonts = await this.fetchFonts()
    this.setState(
      {
        fonts,
      },
      this.appendStyleTags
    )
  }

  render() {
    return this.getFilteredFonts().map((font: Font) => (
      <FontCard key={font.name} font={font} />
    ))
  }
}

export default FontCardContainer

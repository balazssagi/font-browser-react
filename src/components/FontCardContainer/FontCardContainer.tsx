import * as React from 'react'
import { TypeFilters, Font } from '../../types'
import { FontCard } from '../FontCard'
import data from '../../fonts'
import './fontCardContainer.css'
// import axios from 'axios'

// const ENDPOINT = 'http://localhost:1337/font'

interface Props {
  filters: {
    searchTerm: string
    types: TypeFilters
  }
}

interface State {
  fonts: Font[]
  previewText: string
}

class FontCardContainer extends React.Component<Props, State> {
  state: State = {
    fonts: [],
    previewText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fuga magnam perspiciatis. Quae tempora similique, incidunt explicabo facere vitae! Et nam praesentium incidunt aliquid ab optio inventore odit distinctio quo!',
  }

  async fetchFonts(): Promise<Font[]> {
    return new Promise<Font[]>((resolve, reject) => {
      setTimeout(() => {
        resolve(data)
      }, 1500)
    })
    // const fonts = await axios.get<Font[]>(ENDPOINT)
    // return fonts.data
  }

  filteredFonts = (): Font[] => {
    return this.state.fonts.filter((font: Font) => {
      const { filters } = this.props
      return (
        filters.types[font.type] === true &&
        font.name.indexOf(filters.searchTerm.toLowerCase()) !== -1
      )
    })
  }

  appendStyleTags() {
    const headEl = document.getElementsByTagName('head')[0]
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
      headEl.appendChild(styleEl)
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

  handlePreviewChange = (text: string) => {
    this.setState({
      previewText: text,
    })
  }

  render() {
    const { previewText } = this.state
    return (
      <main className="font-card-container">
        {this.filteredFonts().map(font => (
          <FontCard
            key={font.id}
            font={font}
            previewText={previewText}
            onPreviewChange={this.handlePreviewChange}
          />
        ))}
      </main>
    )
  }
}

export { FontCardContainer }

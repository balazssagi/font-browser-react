import * as React from 'react'
import { Component, ChangeEvent } from 'react'
import { Font } from '../../types'
import './fontCard.css'

interface Props {
  font: Font
  previewText: string,
  onPreviewChange: (text: string) => void
}

interface State {
  selectedWeight: number
}

class FontCard extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      selectedWeight: 0,
    }
  }

  handleStyleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      selectedWeight: parseInt(e.target.value, 10),
    })
  }

  render() {
    const { font, previewText, onPreviewChange } = this.props
    const { selectedWeight } = this.state
    const selectedStyle = font.styles[selectedWeight]

    return (
      <div className="font-card">
        <h1>{font.name}</h1>
        <textarea
          value={previewText}
          onChange={(e) => {onPreviewChange(e.target.value)}}
          spellCheck={false}
          style={{
            fontFamily: font.name,
            fontWeight: selectedStyle.weight,
            fontStyle: selectedStyle.style,
          }}
        />
        <select value={selectedWeight} onChange={this.handleStyleChange}>
          {font.styles.map((style, i) => (
            <option key={i} value={i}>
              {style.style} {style.weight}
            </option>
          ))}
        </select>
      </div>
    )
  }
}

export {
  FontCard
}

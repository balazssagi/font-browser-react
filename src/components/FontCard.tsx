import * as React from 'react'
import { Component } from 'react'
import { Font } from '../types'

interface Props {
  font: Font
}

interface State {}

class FontCard extends Component<Props, State> {
  render() {
    const { font } = this.props

    return (
      <div>
        <h1>{font.name}</h1>
        <select>
          {font.styles.map(style => (
            <option>{style.style} {style.weight}</option>
          ))}
        </select>
      </div>
    )
  }
}

export default FontCard

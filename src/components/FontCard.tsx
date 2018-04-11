import * as React from 'react'
import { Component, ChangeEvent } from 'react'
import { Font } from '../types'

interface Props {
  font: Font
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
    const { font } = this.props
    const { selectedWeight } = this.state
    const selectedStyle = font.styles[selectedWeight]

    return (
      <div>
        <h1>{font.name}</h1>
        <p
          style={{
            fontFamily: font.name,
            fontWeight: selectedStyle.weight,
            fontStyle: selectedStyle.style,
          }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
          corporis officiis vel eos accusantium tempore, nisi perferendis. Nemo,
          aliquam ipsam at iure pariatur tenetur delectus dolorem. Maxime aut
          reprehenderit a!
        </p>
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

export default FontCard

import * as React from 'react'
import { Font } from './FontCardContainer'

interface Props {
  font: Font
}

const FontCard = (props: Props) => {
  return <h1>{props.font.name}</h1>
}

export default FontCard

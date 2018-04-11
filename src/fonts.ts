import { Font } from './types'

const fonts: Font[] = [
  {
    id: 0,
    name: 'open sans',
    type: 'serif',
    author: 'google',
    styles: [
      {
        style: 'normal',
        weight: 300,
        url: '',
      },
      {
        style: 'italic',
        weight: 400,
        url: '',
      },
    ],
  },
  {
    id: 1,
    name: 'roboto',
    type: 'sansSerif',
    author: 'google',
    styles: [
      {
        style: 'italic',
        weight: 800,
        url: '',
      },
      {
        style: 'italic',
        weight: 400,
        url: '',
      },
    ],
  },
]

export default fonts
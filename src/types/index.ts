export type FontTypes = 'serif' | 'sansSerif' | 'monospace'

export const SERIF: FontTypes = 'serif'
export const SANS_SERIF: FontTypes = 'sansSerif'
export const MONOSPACE: FontTypes = 'monospace'

export interface TypeFilters {
  [SERIF]: boolean
  [SANS_SERIF]: boolean
  [MONOSPACE]: boolean
}

export interface FontStyle {
  style: 'normal' | 'italic'
  weight: 300 | 400 | 500 | 600 | 700 | 800
  url: string
}

export interface Font {
  id: number
  name: string
  type: FontTypes
  author: string
  styles: FontStyle[]
}

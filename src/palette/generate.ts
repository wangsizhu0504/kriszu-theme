import type { Format } from '../utils'
import { colorPalette } from './palette'
import { colorPaletteDark } from './paletteDark'

/**
 * @param {string} color
 * @param {object} options
 * @param {number} options.index 1 - 10 (default: 6)
 * @param {boolean} options.dark
 * @param {boolean} options.list
 * @param {string} options.format 'hex' | 'rgb' | 'hsl'
 *
 * @return string | string[]
 */
export function generate(color: string, options: {
  dark?: boolean
  list?: boolean
  index?: number
  format?: Format
} = {}) {
  const { dark, list, index = 6, format = 'hex' } = options

  if (list) {
    const colorList = []
    const func = dark ? colorPaletteDark : colorPalette
    for (let i = 1; i <= 10; i++)
      colorList.push(func(color, i, format))

    return colorList
  }
  return dark ? colorPaletteDark(color, index, format) : colorPalette(color, index, format)
}

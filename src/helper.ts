import { palette, themeColor } from './colors'

export interface GetThemeOptions {
  color: 'light' | 'dark'
  name: string
  soft?: boolean
  black?: boolean
}

export function toArray<T>(arr: T | T[]): T[] {
  if (Array.isArray(arr))
    return arr
  return [arr]
}

export function getPaletteColors(style: 'light' | 'dark'): typeof palette {
  if (style === 'dark') {
    /* The array of light to dark colors are reversed to auto-generate dark theme */
    const darkColors: any = {}
    Object.entries(palette).forEach(([name, val]) => {
      if (name === 'black')
        darkColors.white = val

      else if (name === 'white')
        darkColors.black = val

      else
        darkColors[name] = [...toArray(val)].reverse()
    })
    return darkColors
  }
  else {
    return palette
  }
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function createThemeHelpers({ color, soft = false, black = false }: GetThemeOptions) {
  const pick = (options: { light: string, dark: string }) => options[color]

  const v = (key: keyof typeof themeColor, op = '') => {
    let obj = black
      ? themeColor[`black${capitalize(key)}` as keyof typeof themeColor] || themeColor[key]
      : soft
        ? themeColor[`soft${capitalize(key)}` as keyof typeof themeColor] || themeColor[key]
        : themeColor[key]

    if (typeof obj === 'string')
      obj = [obj, obj]

    return pick({ light: obj[1] + op, dark: obj[0] + op })
  }

  const paletteColor = getPaletteColors(color)

  return {
    pick,
    paletteColor,
    v,
  }
}

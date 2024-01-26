import type { IColorSet, IVscodeJsonThemeSetting } from './interface'

export type ColorFetcher = (colorSet: IColorSet) => string
export type ColorGenerator = (color: string) => any

const FontStyle = {
  NONE: 0,
  ITALIC: 1 << 0,
  BOLD: 1 << 1,
  UNDERLINE: 1 << 2,
}

export function getSimpleColorGenerator(name: string, scope: string, fontStyle: number = FontStyle.NONE): ColorGenerator {
  return (color: string) => {
    const colorRule: IVscodeJsonThemeSetting = {
      name,
      scope,
      settings: {
        foreground: color,
      },
    }
    const fontStyles: string[] = []
    if (fontStyle & FontStyle.ITALIC)
      fontStyles.push('italic')

    if (fontStyle & FontStyle.BOLD)
      fontStyles.push('bold')

    if (fontStyle & FontStyle.UNDERLINE)
      fontStyles.push('underline')

    if (fontStyles.length > 0)
      colorRule.settings.fontStyle = fontStyles.join(' ')

    return colorRule
  }
}

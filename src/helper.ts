import type { VscodeTokenRule } from './interface';
import { themeColor } from './colors';
import { palette } from './palette';

export interface GetThemeOptions {
  color: 'light' | 'dark'
  name: string
  soft?: boolean
  black?: boolean
}

export function toArray<T>(arr: T | T[]): T[] {
  if (Array.isArray(arr))
    return arr;
  return [arr];
}

export function getPaletteColors(color: 'light' | 'dark'): Record<string, string> {
  const darkColors: any = {
    black: '#000000',
    white: '#ffffff',
  };
  Object.entries(palette).forEach(([name, val]) => {
    darkColors[name] = val[color];
  });
  return darkColors;
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getRuleToken(name: string, scope: string[] | string, foreground: string, fontStyle?: string): VscodeTokenRule {
  const settings: VscodeTokenRule['settings'] = {
    foreground,
  };
  if (fontStyle)
    settings.fontStyle = fontStyle;

  return {
    name,
    scope,
    settings,
  };
}
export function createThemeHelpers({ color, soft = false, black = false }: GetThemeOptions) {
  const pick = (options: { light: string, dark: string }) => options[color];

  const v = (key: keyof typeof themeColor, op = '') => {
    let obj = black
      ? themeColor[`black${capitalize(key)}` as keyof typeof themeColor] || themeColor[key]
      : soft
        ? themeColor[`soft${capitalize(key)}` as keyof typeof themeColor] || themeColor[key]
        : themeColor[key];

    if (typeof obj === 'string')
      obj = [obj, obj];

    return pick({ light: obj[1] + op, dark: obj[0] + op });
  };

  const paletteColor = getPaletteColors(color);

  return {
    pick,
    paletteColor,
    v,
  };
}

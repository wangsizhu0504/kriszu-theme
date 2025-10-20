import { generate } from './generate';

const colorList: Record<string, string> = {
  red: '#F53F3F',
  orange: '#FF7D00',
  gold: '#F7BA1E',
  yellow: '#FADC19',
  lime: '#9FDB1D',
  green: '#00B42A',
  cyan: '#14C9C9',
  blue: '#165DFF',
  purple: '#722ED1',
  magenta: '#F5319D',
};

const gray = [
  '#f7f8fa',
  '#f2f3f5',
  '#e5e6eb',
  '#c9cdd4',
  '#a9aeb8',
  '#86909c',
  '#6b7785',
  '#4e5969',
  '#272e3b',
  '#1d2129',
];

const palette: Record<string, {
  dark: string[]
  light: string[]
  primary: string
}> = {};
Object.keys(colorList).forEach((key) => {
  palette[key] = {
    light: generate(colorList[key], { list: true }),
    dark: generate(colorList[key], { list: true, dark: true }),
    primary: colorList[key],
  };
});

palette.gray = {
  dark: gray,
  light: gray,
  primary: gray[5],
};
export {
  palette,
};

// [dark, light]
export const themeColor = {
  // base
  primary: ['#4d9375', '#1c6b48'],
  secondary: ['#ff8787', '#f18080'],

  foreground: ['#dbd7caee', '#393a34'],
  activeForeground: ['#bfbaaa', '#4e4f47'],
  secondaryForeground: ['#dedcd590', '#393a3490'],

  ignored: ['#dedcd550', '#393a3450'],
  faded: ['#dedcd510', '#393a3410'],
  border: ['#191919', '#f0f0f0'],

  background: ['#121212', '#ffffff'],
  activeBackground: ['#181818', '#f7f7f7'],
  selectionBackground: ['#eeeeee18', '#22222218'],
  selectionBackgroundActive: ['#eeeeee18', '#22222218'],
  selectionBackgroundInActive: ['#eeeeee10', '#22222210'],

  // soft overrides
  softBackground: ['#222', '#F1F0E9'],
  softActiveBackground: ['#292929', '#E7E5DB'],
  softBorder: ['#252525', '#E7E5DB'],

  // black overrides
  blackForeground: '#dbd7cacc',
  blackBackground: '#000',
  blackActiveBackground: '#121212',
  blackPunctuation: '#444444',

  variable: ['#bd976a', '#b07d48'],
  keyword: ['#4d9375', '#1e754f'],
  number: ['#f6c177', '#c7792b'],
  constant: ['#c77dbb', '#861194'],
  parameter: ['#a0a5d6', '#6b588e'],
  function: ['#80a665', '#59873a'],
  string: ['#c98a7d', '#b56959'],
  operator: ['#cb7676', '#ab5959'],
  comment: ['#758575dd', '#a0ada0'],
  class: ['#6872ab', '#5a6aa6'],
  decorators: ['#ffffff5f', '#0000005f'],
  boolean: ['#74ccaa', '#377961'],
  interface: ['#5d99a9', '#2e808f'],
  type: ['#5DA994', '#2e8f82'],
  builtin: ['#cb7676', '#ab5959'],
  property: ['#b8a965', '#998418'],
  namespace: ['#db889a', '#b05a78'],
  punctuation: ['#666666', '#999999'],
  decorator: ['#bd8f8f', '#bd8f8f'],
  regex: ['#c4704f', '#ab5e3f'],

  // anis
  black: ['#1e1e1e', '#555555'],
  white: ['#dddddd', '#dddddd'],
  green: ['#15ac91', '#1e754f'],
  cyan: ['#5eaab5', '#2993a3'],
  blue: ['#7098d4', '#7098d4'],
  red: ['#f14c4c', '#ab5959'],
  orange: ['#d4976c', '#a65e2b'],
  yellow: ['#e6cc77', '#bda437'],
  magenta: ['#d9739f', '#a13865'],
} satisfies Record<string, [string, string] | string>;

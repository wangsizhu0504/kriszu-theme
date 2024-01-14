import { darken, lighten } from "./utils";
function generateColorsByBase(base: string) {
  const darkens = Array.from({ length: 5 })
    .map((_, i) => darken(base, (i + 1) / 10))
    .reverse();
  const lightens = Array.from({ length: 5 }).map((_, i) =>
    lighten(base, (i + 1) / 10)
  );
  // 从暗到亮
  return [...darkens, base, ...lightens];
}
// [dark, light]
export const themeGroup = {
  primary: ["#6AA1FF", "#165DFF"],
  secondary: ["#66b395", "#26966a"],
  foreground: ["#d6d6dd", "#393a34"],
  activeForeground: ["#bfbaaa", "#4e4f47"],
  secondaryForeground: ["#dedcd590", "#393a3490"],
  ignored: ["#dedcd550", "#393a3450"],
  faded: ["#dedcd510", "#393a3410"],
  border: ["#191919", "#f0f0f0"],

  background: ["#1E1F22", "#FFFFFF"],
  activeBackground: ["#181818", "#f7f7f7"],

  lowBackground: ["#222", "#F1F0E9"],
  lowActiveBackground: ["#292929", "#E7E5DB"],
  lowBorder: ["#252525", "#E7E5DB"],

  default: ["#dddddd", "#333333"],
  variable: ["#a0a5d6", "#6b588e"],
  keyword: ["#ed9cc2", "#c05386"],
  number: ["#f6c177", "#c7792b"],
  constant: ["#f6c177", "#c7792b"],
  parameter: ["#a0a5d6", "#6b588e"],
  function: ["#5fb5be", "#668f9a"],
  string: ["#74ccaa", "#377961"],
  class: ["#f3a580", "#b5855c"],
  operator: ["#ffffff5f", "#0000005f"],
  comment: ["#ffffff4f", "#0000004f"],
  decorators: ["#ffffff5f", "#0000005f"],

  boolean: ["#4d9375", "#1e754f"],
  interface: ["#5d99a9", "#2e808f"],
  type: ["#5DA994", "#2e8f82"],
  builtin: ["#cb7676", "#ab5959"],
  property: ["#b8a965", "#998418"],
  namespace: ["#db889a", "#b05a78"],
  punctuation: ["#666666", "#999999"],
  decorator: ["#bd8f8f", "#bd8f8f"],
  regex: ["#c4704f", "#ab5e3f"],

  // colors
  green: ["#15ac91", "#1e754f"],
  cyan: ["#75d3ba", "#2993a3"],
  blue: ["#4c9df3", "#296aa3"],
  red: ["#f14c4c", "#ab5959"],
  orange: ["#d4976c", "#a65e2b"],
  yellow: ["#e5b95c", "#bda437"],
  magenta: ["#e567dc", "#a13865"],
};

export const colors = {
  gray: generateColorsByBase("#a9aeb8"),
  blue: generateColorsByBase("#4080FF"),
  green: generateColorsByBase("#23C343"),
  yellow: generateColorsByBase("#FBE842"),
  orange: generateColorsByBase("#FF9A2E"),
  red: generateColorsByBase("#F76560"),
  purple: generateColorsByBase("#8D4EDA"),
  pink: generateColorsByBase("#E13EDB"),

  black: "#000",
  white: "#fff",
};

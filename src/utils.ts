export function toArray<T>(array?: T | T[] | null): T[] {
  array = array ?? [];
  return Array.isArray(array) ? array : [array];
}

const _formats = ['hex', 'rgb', 'hsl'] as const;
export type Format = typeof _formats[number];

export function getColorString(color: any, format: Format = 'hex') {
  if (format === 'hex')
    return color[format]();

  return color[format]().round().string();
}

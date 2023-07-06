export function toArray<T>(array?: T | Array<T> | null): Array<T> {
  array = array ?? []
  return Array.isArray(array) ? array : [array]
}

export function toArray<T>(array?: T | T[] | null): T[] {
  array = array ?? []
  return Array.isArray(array) ? array : [array]
}

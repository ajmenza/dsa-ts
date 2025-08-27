type NDArray<T> = (T | NDArray<T>)[];

export function flatten(arr: NDArray<any>): any[] {
  const flat = [];
  if (!Array.isArray(arr[arr.length - 1])) {
    return arr.pop();
  }
  return [];
}

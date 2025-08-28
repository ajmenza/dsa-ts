type NDArray<T> = (T | NDArray<T>)[];

export function flatten<T>(arr: NDArray<any>): any[] {
  const out: T[] = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      out.push(...flatten(item));
    } else {
      out.push(item);
    }
  }
  return out;
}

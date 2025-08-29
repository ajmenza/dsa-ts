export function productOfArray(arr: number[]) {
  if (arr.length === 0) {
    return 0;
  } else if (arr.length === 1) {
    return arr.shift();
  }
  return arr.shift()! * productOfArray(arr);
}

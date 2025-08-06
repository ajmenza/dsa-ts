export function countUniqueValues(arr: number[]): number {
  if (arr.length === 0) {
    return 0;
  }
  let ptr1 = 0;
  for (let ptr2 = 1; ptr2 < arr.length; ptr2++) {
    if (arr[ptr1] !== arr[ptr2]) {
      ptr1++;
      // @ts-ignore
      arr[ptr1] = arr[ptr2];
    }
  }

  return ptr1 + 1;
}

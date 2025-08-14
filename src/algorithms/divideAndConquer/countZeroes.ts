export function countZeroes(arr: number[]): number {
  return findFirstZero(arr, 0, arr.length - 1);
}

function findFirstZero(arr: number[], start: number, end: number): number {
  const subarrayLength = end - start + 1;
  if (subarrayLength === 1) {
    return arr[start] ? 0 : arr.length - start;
  }
  let mid = Math.floor(subarrayLength / 2);
  if (arr[mid]) {
    return findFirstZero(arr, mid + 1, end);
  } else if (subarrayLength === 2) {
    if (start) {
      return findFirstZero(arr, start, start);
    }
    return findFirstZero(arr, end, end);
  } else {
    return findFirstZero(arr, start, mid);
  }
}

// export function countZeroes(arr: number[]): number {
//   let i = Math.floor(arr.length / 2);
//
//   while (i > -1) {
//     const nextValue = arr[i + 1];
//     if (nextValue) {
//       i++;
//     } else {
//       if (arr[i]) {
//         return arr.length - i - 1;
//       } else {
//         i--;
//       }
//     }
//   }
//   return arr.length;
// }

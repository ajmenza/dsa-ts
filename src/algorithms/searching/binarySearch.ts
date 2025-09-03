export function binarySearch(arr: any[], value: any): number {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    // this way prevents overflow
    const mid = start + Math.floor((end - start) / 2);

    if (arr[mid] === value) {
      return mid;
    } else if (arr[mid] < value) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}

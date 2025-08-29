export function someRecursive(
  arr: any[],
  callback: (value: any) => boolean,
): boolean {
  if (arr.length === 0) {
    return false;
  }
  return callback(arr.pop()) || someRecursive(arr, callback);
}

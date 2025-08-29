export function findRotatedIndex(arr: number[], num: number) {
    const pivot = findPivot(arr);

    if (pivot! > 0 && num >= arr[0]! && num <= arr[pivot! - 1]!) {
        return binarySearch(arr, num, 0, pivot! - 1);
    }
    return binarySearch(arr, num, pivot!, arr.length - 1);
}

function binarySearch(arr: number[], num: number, start: number, end: number) {
    if (arr.length === 0) {
        return -1;
    }
    if (num < arr[start]! || num > arr[end]!) {
        return -1;
    }

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (arr[mid] === num) {
            return mid;
        } else if (arr[mid]! > num) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
}

function findPivot(arr: number[]) {
    if (arr.length === 1 || arr[0]! < arr[arr.length - 1]!) {
        return 0;
    }
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (arr[mid]! > arr[mid + 1]!) {
            return mid + 1;
        } else if (arr[start]! <= arr[mid]!) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
}

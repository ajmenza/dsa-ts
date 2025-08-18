export function findRotatedIndex(arr: number[], num: number, low = 0, high = arr.length - 1) {
    let mid = low + Math.floor((high - low) / 2)
    // if (arr[mid + 1]! < arr[mid]! && num < )
}

export function findFirstRotate(arr: number[], num: number, low = 0, high = arr.length - 1) {
    let mid = low + Math.floor((high - low) / 2)

    if ((mid === 0 || arr[mid - 1]! < arr[mid]!) && (mid === arr.length - 1 || arr[mid]! > arr[mid + 1]!)) {
        return mid;
    }
    if (mid === 0 || arr[mid - 1]! < arr[mid]!) {
        if (mid === arr.length - 1 || arr[mid]! > arr[mid + 1]!) {
            return mid;
        }
        return findFirstRotate(arr, num, mid + 1, high);
    } else {
        return mid;
    }
}

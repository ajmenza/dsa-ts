export function sortedFrequency(arr: number[], num: number) {
    const firstIndex = findFirstNumber(arr, num);
    return firstIndex > -1 ? findLastNumber(arr, num, firstIndex) - firstIndex + 1 : -1;
}

function findFirstNumber(arr: number[], num: number, low = 0, high = arr.length - 1) {
    let mid = low + Math.floor((high - low) / 2)

    if (low < 0 || low > arr.length - 1) {
        return -1;
    }
    if ((mid === 0 || arr[mid - 1]! < num) && arr[mid] === num) {
        return mid;
    } else if (arr[mid]! >= num) {
        return findFirstNumber(arr, num, low, mid - 1);
    } else {
        return findFirstNumber(arr, num, mid + 1, high);
    }
}

function findLastNumber(arr: number[], num: number, low = 0, high = arr.length - 1) {
    let mid = low + Math.floor((high - low) / 2)

    if (low < 0 || low > arr.length - 1) {
        return -1;
    }
    if ((mid === arr.length - 1 || arr[mid + 1]! > num) && arr[mid] === num) {
        return mid;
    } else if (arr[mid]! <= num) {
        return findLastNumber(arr, num, mid + 1, high);
    } else {
        return findLastNumber(arr, num, low, mid - 1);
    }
}

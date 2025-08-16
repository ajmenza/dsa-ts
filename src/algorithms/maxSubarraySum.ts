export function maxSubarraySum(arr: number[], num: number): number | null {
    if (arr.length < num) {
        return null;
    }

    let max = 0;
    let ptr = 0;
    let currentSum = 0;
    while (ptr < arr.length) {
        if (ptr > num - 1) {
            currentSum -= arr[ptr - num]!;
        }
        currentSum += arr[ptr++]!;
        max = Math.max(max, currentSum);
    }


    return max;
}



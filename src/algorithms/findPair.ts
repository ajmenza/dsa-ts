export function findPair(arr: number[], num: number): boolean {
    if (arr.length < 2) {
        return false;
    }
    if (num === 0) {
        return arr.length !== (new Set(arr)).size;
    }
    const matches = new Set<number>();

    arr.forEach(element => {
        matches.add(element - num);
        matches.add(element + num);
    });

    for (const element of arr) {
        if (matches.has(element)) {
            return true;
        }
    }

    return false;
}

export function findPair2(arr: number[], num: number): boolean {
    arr.sort((a, b) => a - b);

    let ptr1 = 0;
    let ptr2 = 1;

    while (ptr1 < arr.length && ptr2 < arr.length) {
        const ptr1Val = arr[ptr1]!;
        const ptr2Val = arr[ptr2]!;
        if (ptr1 !== ptr2 && Math.abs(ptr2Val - ptr1Val) === Math.abs(num)) {
            return true;
        } else if (ptr2Val - ptr1Val > num) {
            ptr2++
        } else {
            ptr1++;
        }
    }
    return false;
}

// [4,-2,3,10],-6
//[-2, 3, 4, 10], -6


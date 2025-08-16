export function isSubsequence(str1: string, str2: string): boolean {
    if (str1.length > str2.length) {
        return false;
    }

    let ptr1 = 0
    let ptr2 = 0

    while (ptr2 < str2.length) {
        if (str1[ptr1] === str2[ptr2]) {
            if (ptr1 === str1.length - 1) {
                return true;
            }
            ptr1++;
        }
        ptr2++;
    }
    return false;
}

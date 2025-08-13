import { returnBool } from "../utils.js";

export function minSubArrayLen(arr: number[], sum: number): number {
  let length = Infinity;
  let ptr1 = 0;
  let ptr2 = 0;
  let total = 0;

  while (ptr1 < arr.length) {
    if (ptr2 < arr.length && (total < sum || ptr1 === ptr2)) {
      total += arr[ptr2++]!;
    } else {
      total -= arr[ptr1++]!;
    }
    if (total >= sum) {
      length = Math.min(length, ptr2 - ptr1);
    }
  }

  return length === Infinity ? 0 : length;
}

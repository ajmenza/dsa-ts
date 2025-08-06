import { returnBool } from "../utils.js";

export function averagePair(arr: number[], avg: number): boolean {
  if (arr.length === 1) {
    return arr[0] === avg;
  } else if (arr.length === 0) {
    return false;
  }

  let ptr1 = 0;
  let ptr2 = arr.length - 1;

  while (ptr2 - ptr1 > 1) {
    // @ts-ignore
    const mean = (arr[ptr1] + arr[ptr2]) / 2;
    if (mean === avg) {
      return true;
    } else if (mean > avg) {
      ptr2--;
    } else {
      ptr1++;
    }
  }

  // @ts-ignore
  return (arr[ptr1] + arr[ptr2]) / 2 === avg;
}

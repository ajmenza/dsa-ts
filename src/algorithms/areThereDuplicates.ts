import { returnBool } from "../utils.js";

export function areThereDuplicates(...args: any[]): boolean {
  if (args.length <= 1) {
    return returnBool(false);
  }

  args.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  let ptr1 = 0;
  let ptr2 = 1;

  while (ptr2 < args.length) {
    if (args[ptr1] === args[ptr2]) {
      return returnBool(true);
    }
    ptr1++;
    ptr2++;
  }

  return returnBool(false);
}

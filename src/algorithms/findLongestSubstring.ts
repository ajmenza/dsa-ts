import { returnBool } from "../utils.js";

export function findLongestSubstring(str: string): number {
  if (!str.length) {
    return 0;
  }

  const substring = new Set<string>();
  let longest = 0;
  let ptr1 = 0;
  let ptr2 = 0;

  while (ptr2 < str.length) {
    const char = str[ptr2]!;
    if (!substring.has(char)) {
      substring.add(char);
      longest = Math.max(longest, substring.size);
      ptr2++;
    } else {
      substring.delete(str[ptr1++]!);
    }
  }
  return longest;
}

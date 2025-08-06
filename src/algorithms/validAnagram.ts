export function validAnagram(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) {
    return false;
  } else if (str1.length === 0 && str2.length === 0) {
    return true;
  }
  const string1Frequency: Record<string, number> = {};

  for (let char of str1) {
    string1Frequency[char] = (string1Frequency[char] ?? 0) + 1;
  }

  for (let char of str2) {
    if (!string1Frequency[char]) {
      return false;
    }
    string1Frequency[char]--;
  }

  return true;
}

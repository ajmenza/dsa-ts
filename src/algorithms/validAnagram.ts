export function validAnagram(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) {
    return false;
  } else if (str1.length === 0 && str2.length === 0) {
    return true;
  }
  const string1Frequency: Record<string, number> = {};

  for (let char of str1) {
    if (!isAlphabetic()) {
      return false;
    }
    char = char.toLowerCase();
    string1Frequency[char] = (string1Frequency[char] ?? 0) + 1;
  }

  const string2Frequency = {};

  return true;
}

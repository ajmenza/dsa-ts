export function isPalindrome(str: string): boolean {
  if (str.length === 0) {
    return true;
  }
  return (
    str.at(0) === str.at(str.length - 1) &&
    isPalindrome(str.slice(1, str.length - 1))
  );
}

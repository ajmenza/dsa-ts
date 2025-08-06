import { returnBool } from "../utils.js";

export function findAllDuplicates(arr: number[]): number[] {
  if (arr.length < 2) {
    return [];
  }

  const frequency: Record<string, number> = {};

  arr.forEach((num) => {
    frequency[num] = (frequency[num] || 0) + 1;
  });

  const duplicates: number[] = [];

  Object.keys(frequency).forEach((key) => {
    if ((frequency[key] || 0) > 1) {
      duplicates.push(+key);
    }
  });

  console.log(duplicates);
  return duplicates;
}

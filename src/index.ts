import { validAnagram } from "./algorithms/validAnagram.js";
import { countUniqueValues } from "./algorithms/countUniqueValues.js";
import { sameFrequency } from "./algorithms/sameFrequency.js";
import { areThereDuplicates } from "./algorithms/areThereDuplicates.js";
import { findAllDuplicates } from "./algorithms/findAllDuplicates.js";
import { averagePair } from "./algorithms/averagePair.js";

// true
console.log(averagePair([1, 2, 3], 2.5));
// true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
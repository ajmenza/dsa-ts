export function sameFrequency(num1: number, num2: number): void {
  let num1Sum = 0;
  let num2Sum = 0;

  while (num1 !== 0 || num2 !== 0) {
    const lastDigit1 = num1 % 10;
    const lastDigit2 = num2 % 10;
    num1Sum += lastDigit1;
    num2Sum += lastDigit2;
    num1 = Math.floor(num1 / 10);
    num2 = Math.floor(num2 / 10);
  }

  console.log(num1Sum === num2Sum);
}

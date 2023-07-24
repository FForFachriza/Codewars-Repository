export {};
// Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Example:solution(1000); // should return 'M'
// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

interface RomansNumerals {
  symbol: string;
  value: number;
}

function solution(number: number): string {
  const symbol: RomansNumerals[] = [
    { symbol: "I", value: 1 },
    { symbol: "IV", value: 4 },
    { symbol: "V", value: 5 },
    { symbol: "IX", value: 9 },
    { symbol: "X", value: 10 },
    { symbol: "XL", value: 40 },
    { symbol: "L", value: 50 },
    { symbol: "XC", value: 90 },
    { symbol: "C", value: 100 },
    { symbol: "CD", value: 400 },
    { symbol: "D", value: 500 },
    { symbol: "CM", value: 900 },
    { symbol: "M", value: 1000 },
  ];

  let ans: string = "";

  for (let i = symbol.length - 1; i >= 0; i--) {
    const symbols = symbol[i];
    while (number >= symbols.value) {
      ans += symbols.symbol;
      number -= symbols.value;
    }
  }
  return ans;
}

console.log(solution(4));

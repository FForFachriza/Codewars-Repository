// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

// Examples:
// 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
// 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
// 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5

function isDivisible(n: number, x: number, y: number): boolean {
  const math1 = n / x;
  const math2 = n / y;

  console.log(Number.isInteger(math1));
  

  if (Number.isInteger(math1)&& Number.isInteger(math2)) {
    return true;
  }

  return false;
}

console.log(isDivisible(93, 5, 10));

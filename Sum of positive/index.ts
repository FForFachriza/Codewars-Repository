// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr: number[]): number {
  const positiveArray = arr.filter((num) => num > 0);

  const sum = positiveArray.reduce((acc, curr) => acc + curr, 0);

  return sum;
}

console.log(positiveSum([-1, -2, -3, -4, -5]));
console.log({
  message: Number.isInteger(-1),
});

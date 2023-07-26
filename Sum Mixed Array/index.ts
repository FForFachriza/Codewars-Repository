/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

function sumMix(x: any[]): number {
  let numberArr: number[] = [];

  x.map((data) => {
    numberArr.push(parseInt(data, 10));
  });

  return numberArr.reduce((prev, curr) => prev + curr, 0);
}

console.log(sumMix([9, 3, 7, "3"]));

/**
 * I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
 */

export const arrayPlusArray = (arr1: number[], arr2: number[]): number => {
  return arr1.reduce((prev, curr) => prev + curr, 0) + arr2.reduce((prev, curr) => prev + curr, 0);
};

console.log(arrayPlusArray([1, 2, 3, 4], [1, 2, 3, 4]));

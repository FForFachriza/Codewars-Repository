// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(arr: number[]): number {
  let result: number = 1;

  arr.map((data) => {
    console.log(data);
    result *= data;
  });

  return result;
}

// console.log(grow([1, 2, 3, 4]));

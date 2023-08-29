/**
 * There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

    Find the unique number (this kata)
    Find the unique string
    Find The Unique
 */

// export function findUniq(arr: number[]): number {
//   let uniqValues: number = 0;
//   let left = 0;
//   let right = arr.length - 1;
//   console.log(arr[right]);
//   console.log(arr[left]);

//   // //   for (let i = 0; i < arr.length; i++) {
//   // //     // const element = arr[i];
//   // //     while(arr[left] !==)
//   // //   }

//     // while(left < right){

//     // }

//   console.log(right, left);
//   console.log(arr[right]);

//   return arr[right];
// }

export function findUniq(arr: number[]): number {
  let uniqValues = [...new Set(arr)];

  for (const value of uniqValues) {
    const count = arr.filter((num) => num === value).length;
    if (count === 1) {
      return value;
    }
  }
  return 1;
}

console.log(findUniq([0, 0, 5, 0, 0]));

console.log("hai");

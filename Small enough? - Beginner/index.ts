/**
 * You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.

 */

export function smallEnough(a: number[], limit: number): boolean {

  const b = a.map((val) => {
    return val < limit || val === limit;
  });

  return !b.includes(false);
}

console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 107));

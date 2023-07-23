// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = (n: number): number[] => {
  let arr: number[] = [];

  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  return arr.reverse();
};

console.log(reverseSeq(5));

// result [5,4,3,2,1]

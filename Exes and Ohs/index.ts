// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function xo(str: string): boolean {
  const totalX = str.split("").filter((char) => char.toLowerCase() === "x");
  const totalO = str.split("").filter((char) => char.toLowerCase() === "o");

  return totalX.length === totalO.length;
}

console.log(xo("ooxx"));

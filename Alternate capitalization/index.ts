/**
 * Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!
 */

export function capitalize(s: string): string[] {
  const splittedText = s.split("");
  let firstArr: string[] = [];
  let secondArr: string[] = [];

  for (let i = 0; i < splittedText.length; i++) {
    const element = splittedText[i];
    if (i % 2 === 0) {
      firstArr.push(element.toUpperCase());
    } else {
      secondArr.push(element.toLowerCase());
    }
  }

  console.log([...firstArr,secondArr].sort);

  return ["hai"];
}

console.log(capitalize("abcdef"));

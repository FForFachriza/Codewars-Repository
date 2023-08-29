/**
 * Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

 */

export class Kata {
  static getCount(str: string): number {
    let total: number = 0;
    const splittedArr = str.split("");

    for (const x of splittedArr) {
      if (x === "a" || x === "i" || x === "u" || x === "e" || x === "o") {
        total += 1;
      }
    }

    return total
  }
}

console.log(Kata.getCount("abracadabra"));

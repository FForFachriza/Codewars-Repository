/**
 * Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
 */

export const high = (str: string): string => {
  const arr = str.split(" ");
  const score = arr.map((words) => words.split("").reduce((acc, cur) => acc + cur.charCodeAt(0) - 96, 0));
  const max = Math.max(...score);
  const index = score.indexOf(max);

  return arr[index]
};

console.log(high("what time are we climbing up the volcano"));

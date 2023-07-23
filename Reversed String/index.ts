// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str: string): string {
  const splitString = str.split("").reverse();
  return splitString.join("");
}

console.log(solution("world"))
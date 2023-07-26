/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
Examples

"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

 */

function reverseWords(str: string): string {
  let newWords: string[] = [];

  str.split(" ").map((data) => {
    newWords.push(data.split("").reverse().join(""));
  });

  return newWords.join(" ")
}

console.log(reverseWords("double spaces"));

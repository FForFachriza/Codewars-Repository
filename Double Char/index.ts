/**
 * Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
Examples (Input -> Output):

* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "

Good Luck!

 */

function doubleChar(str: string): string {
  let newWords: string[] = []
  for (const s of str) {
    newWords.push(s.repeat(2))
  }

  return newWords.join("")
}

console.log(doubleChar("String"));

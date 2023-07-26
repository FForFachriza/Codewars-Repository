/**
 * 
 * Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
 * 
 */

function abbrevName(name: string): string {
  const abbrevArr: string[] = name.toUpperCase().split(" ");
  const firstName = abbrevArr[0].split("")[0];
  const lastName = abbrevArr[abbrevArr.length - 1].split("")[0];

  return `${firstName}.${lastName}`;
}

console.log(abbrevName("patrick feeney"));

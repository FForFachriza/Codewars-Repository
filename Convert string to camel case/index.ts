/**
 * Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
Examples

"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
 */

function toCamelCase(str: string) {
  const prohibited = ["-", "_"];

  const splittedStr = str.split("");
  console.log(splittedStr);
  const newArr = [];

  // if(str.includes("-")){
  //   console.log(str);
  // }

  for (const [i, x] of splittedStr.entries()) {
    console.log(x[2]);
    if (x.includes("-") || x.includes("_")) {
      console.log(i);
      newArr.push(x[i]);
    }
  }

  console.log(newArr);
}

console.log(toCamelCase("the-stealth-warrior"));

/*
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

    S is misinterpreted as 5
    O is misinterpreted as 0
    I is misinterpreted as 1

The test cases contain numbers only by mistake.

*/

function correct(s: string): string {
  const string = [...s];

  for (let [i, value] of string.entries()) {
    if (value.includes("5")) {
      string[i] = "S";
    } else if (value.includes("0")) {
      string[i] = "O";
    } else if (value.includes("1")) {
      string[i] = "I";
    }
  }

  return string.join("");
}

console.log(correct("5050"));

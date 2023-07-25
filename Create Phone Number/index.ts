// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// Example

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers: number[]): string {
  const firstNum = numbers.slice(0, 3);
  const secondNum = numbers.slice(3, 6);
  const thirdNum = numbers.slice(6, numbers.length);

  console.log(firstNum.join().split(",").join(""));

  return template(
    firstNum.join().split(",").join(""),
    secondNum.join().split(",").join(""),
    thirdNum.join().split(",").join("")
  );
}

const template = (firstNum: string, secondNum: string, thirdNum: string): string => {
  return `(${firstNum}) ${secondNum}-${thirdNum}`;
};

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

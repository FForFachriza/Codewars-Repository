// Convert number to reversed array of digits

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// Example(Input => Output):

// 35231 => [1,3,2,5,3]
// 0 => [0]

const digitize = (n: number): number[] => {
  const datas = n.toString().split("").reverse();
  let newValue: number[] = [];
  for (const data of datas) {
    newValue.push(parseInt(data));
  }
  return newValue;
};
console.log(digitize(35231));

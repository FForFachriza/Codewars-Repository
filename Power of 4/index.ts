/**
 * Write a method that returns true if a given parameter is a power of 4, and false if it's not. If parameter is not an Integer (eg String, Array) method should return false as well.

(In C# Integer means all integer Types like Int16,Int32,.....)
Examples

power_of_4(1024) => true
power_of_4(55)   => false
power_of_4("Four") => false

 */

export function powerOf4(n: any): boolean {
  if (typeof n !== "number" || !Number.isInteger(n)) {
    return false;
  }

    while (n > 1) {
      if (n % 4 !== 0) {
        return false;
      }
      n /= 4;
    }

  return n === 1;
}

console.log(powerOf4(1024));

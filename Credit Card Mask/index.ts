/**
 * Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.
 */

export function maskify(cc: string): string {
  if (cc.length <= 4) {
    return cc;
  }

  const splittedCC = cc.split("").slice(0, cc.length - 4).length
  const mask = Array(splittedCC).fill("#").join("")
  console.log(mask);
  console.log(splittedCC);
  const lastFourNum = cc.slice(cc.length - 4);
  console.log(lastFourNum);

  return `${mask}${lastFourNum}`
}

console.log(maskify("4556364607935616"));

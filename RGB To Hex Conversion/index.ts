/**The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
Examples (input --> output): */

export function rgb(r: number, g: number, b: number): string {
  // Membatasi nilai RGB ke rentang 0-255
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));

  const toHex = (value: number): string => {
    const hex = value.toString(16).toUpperCase();
    return hex.length === 1 ? "0" + hex : hex;
  };

  return toHex(r) + toHex(g) + toHex(b);
}

console.log(rgb(900, 217, 279));

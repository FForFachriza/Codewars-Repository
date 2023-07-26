/** 
 * A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
    Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
 */

const isPangram = (phrase: string): boolean => {
  const alphabet = "qwertyuiopasdfghjklzxcvbnm".split("");
  const letterSet = new Set();

  const arrayedPhrase = phrase.toLowerCase().split("");

  arrayedPhrase.map((letter) => {
    alphabet.includes(letter) ? letterSet.add(letter) : null;
  });

  return letterSet.size === alphabet.length
};

console.log(isPangram("The quick brown fox jumps over the lazy dog"));

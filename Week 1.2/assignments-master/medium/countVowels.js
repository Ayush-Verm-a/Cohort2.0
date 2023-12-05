/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    const vowels = "aiueoAIUEO";
    let cnt = 0;

    for (let char of str) {
        if (vowels.indexOf(char) !== -1) {
            cnt++;
        }
    }

    return cnt;
}

module.exports = countVowels;
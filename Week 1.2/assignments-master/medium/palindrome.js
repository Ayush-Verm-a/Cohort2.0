/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
    str = str.toLowerCase();
    let str2 = '';
    let alphabet = "abcdefghijklmnopqrstuvwxyz"

    for (let char of str) {
        if (alphabet.indexOf(char) !== -1) {
            str2 += char;
        }
    }

    let str1 = str2.split("").reverse().join("");
    return str1 == str2;
}

module.exports = isPalindrome;

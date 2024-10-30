/* Frequency Counter Anagram Challenge

Given two strings, write a function to determine if the second string is an anagram of the first.
An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

examples
-----------
validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram('rat', 'car') // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true
*/

function validAnagram(str1, str2) {
    if (str1.length == 0 && str2.length == 0) {
        return true;
    }

    if (str1.length !== str2.length) {
        return false;
    }

    let letterStr1 = {};
    let letterStr2 = {};

    for (let i = 0; i < str1.length; i++) {
        letterStr1[str1[i]] = (letterStr1[str1[i]] || 0) + 1;
    }

    for (let i = 0; i < str2.length; i++) {
        letterStr2[str2[i]] = (letterStr2[str2[i]] || 0) + 1;
    }

    // console.log('obj1', letterStr1);
    // console.log('obj2', letterStr2);

    for (const key in letterStr1) {
        if (letterStr1[key] !== letterStr2[key]) {
            return false;
        }
    }

    return true;
}
console.log(validAnagram('texttwisttime', 'timetwisttext'));


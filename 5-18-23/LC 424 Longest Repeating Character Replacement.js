/*

s = "ABAB"
k = 2

{
    A: 2,
    B: 2
}

changeCharacterCounter = 0 1 2
length = 1 2 3 4
subString = A A A A 


1  A     2
A  B  A  B

*/

var characterReplacement = function(s, k) {
    if (s.length === 1) return 1;

    let changeCharacterCount = 0
    let subStringLength = 0
    let subString = ""

    let one = 0
    let two = 1
    subString += s[one]
    let char1 = s[one]
    let char2 = s[two]    
    
    while (two < s.length) {

        if (char1 !== char2) {

        }
    }
}
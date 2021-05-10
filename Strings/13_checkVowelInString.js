/*
Problem Statement
Given a string S, print 'yes' if it has a vowel in it else print 'no'.
*/

userInput = ["prtk"];

let inputString = userInput[0].split('');

let checkVowelInString = function(string){
    return (string.includes('a')||string.includes('e')||string.includes('i')||string.includes('o')||string.includes('u')||
    string.includes('A')||string.includes('E')||string.includes('I')||string.includes('O')||string.includes('U'));
}

if(checkVowelInString(inputString))
    console.log("yes");
else
    console.log("no");
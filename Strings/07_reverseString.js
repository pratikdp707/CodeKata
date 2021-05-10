/*
Problem Statement
Jennyfer is fond of strings. 
She wants to read the character from right to left (reverse the string), 
so she wants you to design a suitable algorithm which satisfy her desire.
*/

userInput = ["jennyfer"];

let inputString = userInput[0];
let reversedString = [];

let reverseString = function(){
    for(let i=inputString.length-1 ; i>=0 ; i--){
        if(i == inputString.length-1)
            reversedString.push(inputString.charAt(i).toUpperCase());
        else
            reversedString.push(inputString.charAt(i));
    }
}

reverseString();
console.log(reversedString.join(""));
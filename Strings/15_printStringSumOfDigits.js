/*
Problem Statement
You are given a string ‘s’.Your task is to print the string in the order they are present and then sum of digits.
*/

userInput = ["AC30BD40"];

let inputString = userInput[0];
let outputString = [];
let sumOfDigits = 0;

let generateStringSumOfDigits = function(string){
    for(let i =0  ; i<string.length ; i++){
        if(string.charCodeAt(i)>= 65 && string.charCodeAt(i) <=90 || string.charCodeAt(i)>= 97 && string.charCodeAt(i) <=122)
            outputString.push(string.charAt(i));
        else
            sumOfDigits += +string[i];
    }
}

generateStringSumOfDigits(inputString);

console.log(outputString.join("")+sumOfDigits);

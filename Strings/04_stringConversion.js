/*
Problem Statement
Write a program to get a string S, Type of conversion (1 - Convert to Lowercase, 2 - Convert to Uppercase) T, and integer P . 
Convert the case of the letters in the positions which are multiples of P.(1 based indexing).
*/


userInput = ["ProFiLe", "1", "2"];

let stringToBeConverted = userInput[0];
let convertedString = [];

//function to convert the characters of string 
let convertStringCharacters = function(string, type, positions){
    for(let i=0 ; i<string.length ; i++){
        if((i+1) % positions ==0){
            if(type == '1'){
                convertedString.push(string.charAt(i).toLowerCase());
            }
            if(type == '2'){
                convertedString.push(string.charAt(i).toUpperCase());
            }
        }
        else
            convertedString.push(string.charAt(i));
    }
    return convertedString;
}

console.log(convertStringCharacters(stringToBeConverted, userInput[1], userInput[2]).join(""));
/*
Problem Statement
You are given a string ‘s’. Your task is to tell whether string is beautiful or not.
A beautiful string is a string in which String starts with ‘a’ or ‘A’ and middle element is either ‘m’ or ‘M’ and last element is ‘z’or ‘Z’
*/

userInput = ["Amz"];

let inputString = userInput[0];
//function to check whether a string is beautiful or not
let checkBeautiful = function(string){
    if( (string[0] == 'a' || string[0] == 'A') && (string[parseInt(string.length/2)] == 'm' || string[parseInt(string.length/2)] == 'M') 
        && (string[string.length-1] == 'z' || string[string.length-1] == 'Z')){
            return 1;
        }
    return 0;
}

console.log(checkBeautiful(inputString));


/*
Problem Statement
You are given with a string which comprises of some numbers. 
Your task is to find the largest integer by converting the string to the corresponding integer.
*/

userInput = ["I was born on 12 october 1998."];

let inputString = userInput[0].split(" ");
//function to find greatest number in array of string.
let greatestNumberInString = function(string){
    let max = 0 ;
    for( let i=0 ; i<string.length ; i++){
        if(parseInt(string[i]) != NaN && parseInt(string[i]) > max)
            max = parseInt(string[i]);
    }
    return max;
}

console.log(greatestNumberInString(inputString));


/*
You are given a number ‘n’.Your task is to develop an algorithm to tell whether the number is ‘ajs’ or not.
An ‘ajs’ number is a number whose sum of first two digits is present in given number ‘n’
*/

userInput= ["9817"];

let inputString = userInput[0];
let stringToNumber = userInput[0].split("");

let sumOfFirstTwoNumber = +stringToNumber[0] + +stringToNumber[1];
sumOfFirstTwoNumber = ""+sumOfFirstTwoNumber;
//calculate length of the sum
let lengthOfSum = (sumOfFirstTwoNumber).length;
//function to check whethe sum of first two number is present in the original number or not
let checkAJS = function(string){
    for(let i=0 ; i<=string.length-lengthOfSum ; i++){
        if(string.substring(i,i+lengthOfSum) == sumOfFirstTwoNumber)
            return 1;
    }
    return 0;
}

console.log(checkAJS(inputString));
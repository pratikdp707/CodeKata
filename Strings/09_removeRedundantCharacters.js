/*
Problem Statement
Rahul is given a task to manipulate a string, 
He hired you as a developer your task is to delete all the repeating characters and print the result left.
*/

userInput = ["mississipie"];

let originalString = userInput[0];

let distinctChar = [];

//function to find distinct characters in string;
let findDistinctChar = function(string){
    for(let i=0 ; i<string.length ; i++){
        if(string.indexOf(string[i]) == string.lastIndexOf(string[i]))
            distinctChar.push(string.charAt(i));
    }
}

findDistinctChar(originalString);
console.log(distinctChar.join(""));
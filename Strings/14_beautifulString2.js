/*
Problem Statement
You are given a string ‘s’. Your task is to find whether string is beautiful or not. 
A string is said to be beautiful whenever string is made up of only three characters. 
All the three characters must be distinct. 
Print true if string is beautiful and false when it is not beautiful
*/

userInput = ["Aab"];
let myString = userInput[0];

//to Count the character present in the String
var countCharacter = function(myString){
    let charArray = [];
    for( i =0 ; i<myString.length ; i++){
        if(!charArray.includes(myString[i]))
            charArray.push(myString[i])
    }
    return charArray.length;
}

if(countCharacter(myString) == 3)
    console.log("1");
else
    console.log("0");
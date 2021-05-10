/* 
Problem Statement
You are given a string. You have to print “Wonder” if the string is wonderful and -1 if it is not. 
 A wonderful string is a string,which is made up of exactly 3 different characters.
*/


userInput = ["aabbcc"];
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
    console.log("Wonder");
else
    console.log("-1");
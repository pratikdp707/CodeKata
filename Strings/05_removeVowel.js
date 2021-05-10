/*
Problem Statement
You are given a string.Your task is to print only the consonants present in the string without affecting the sentence spacings if present. 
If no consonants are present print -1
*/
userInput = ['A ei ou'];

let originalString = userInput[0];

let consonantString = [];
let vowelArray = ['a','e','i','o','u','A','E','I','O','U'];

//function to remove Vowel from string
var removeVowel = function(string){
    for(let i=0 ; i<string.length ; i++){
        if(vowelArray.includes(string.charAt(i)))
            continue;
        else
            consonantString.push(string.charAt(i));
    }
}

removeVowel(originalString);
let result = consonantString.filter((a) => a!=" ");
//condition is checking whether every element in the converted string is " "
if(consonantString.filter((a) => a!=" ").length == 0)
    console.log("-1")
else
    console.log(consonantString.join(""));
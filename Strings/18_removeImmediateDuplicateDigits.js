/*
Problem Statement
You are given a number with duplicate digits your task is to remove the immediate duplicate digits and print the result
*/

userInput = ["1331"];

var numArray = userInput[0].split("");
    for(i=0 ; i<numArray.length ; i++){
        numArray[i] = +numArray[i];
    }

    var distinctDigits = [];
    var j = 0;
    for(i=0 ; i<numArray.length ; i++){
        if(numArray[i] == numArray[i+1]){
            i++;
        }
        else{
            distinctDigits[j] = numArray[i];
            j++; 
        }
    }
    if(distinctDigits.length == 0)
        console.log("-1");
    else
        console.log(distinctDigits.join(""));
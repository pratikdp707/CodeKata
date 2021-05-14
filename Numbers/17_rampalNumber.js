/*
Rampal is a number in which the sum of last two digits of that number is multiple of 4.
Your teacher has given you the task to make a list of rampal numbers.
Your task is to tell whether the number is rampal or not.
*/

userInput = ["-20"];

let inputNumber = userInput[0];

let checkRampal = function(number){
    let numArray = number.split("");
    if(number < 0)
        return ((+numArray[1]+ +numArray[numArray.length-1])%4==0)
    else
        return ((+numArray[numArray.length-2] + +numArray[numArray.length-1]) %4 ==0)
}

if(checkRampal(inputNumber))
    console.log("yes")
else
    console.log("no")
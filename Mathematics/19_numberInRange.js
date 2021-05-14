userInput = ["3", "2 6"];
userInput[1] = userInput[1].split(" ");

let numberToBeChecked = +userInput[0];
let startOfRange = +userInput[1][0];
let endOfRange = +userInput[1][1];

if(numberToBeChecked >= startOfRange && numberToBeChecked <= endOfRange)
    console.log("yes");
else
    console.log("no");
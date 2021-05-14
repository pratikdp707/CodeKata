userInput = ["I enjoy doing codkata",
    "codekata"];

let string = userInput[0];
let substring = userInput[1];

let occurenceCount = string.split(substring).length-1;

if(occurenceCount == 0)
    console.log(-1);
else
    console.log(occurenceCount);
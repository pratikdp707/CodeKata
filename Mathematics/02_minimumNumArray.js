userInput = ["5 4 3 2 1 7 6 10 8 9"];
userInput[0] = userInput[0].split(" ");

var numArray = [];
for( i =0; i<userInput[0].length ; i++)
    numArray[i] = +userInput[0][i];

numArray.sort((a,b) => a-b);
console.log(numArray[0]);
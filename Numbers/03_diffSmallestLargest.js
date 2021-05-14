/*
You are given with an array of numbers, Your task is to print the difference of indices of largest and smallest number.
All number are unique.
*/

var userInput =["5", "1 6 4 0 3"];
userInput[1] = userInput[1].split(" ");

var max = 0;
var min = 0;

for( i=0 ; i<userInput[1].length ; i++){
    if(+userInput[1][i] > userInput[1][max])
        max = i;
    if(+userInput[1][i] < userInput[1][min])
        min = i;
}

console.log(max-min);
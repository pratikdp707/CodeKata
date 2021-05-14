/*
Rohan is teacher at “Sunsdfghpol” academy about dfg numbers.Assume you are student of his coaching batch .
He has given you some task.Your task is to print nth dfg  number.
A dfg number is a number whose prime factors are only 2,3 or 5.
*/

userInput = ["2"];

let inputIndexRange = +userInput[0];
let dfgNumbersUptoIndex = [1];
let count = 1;
let numberToCheck =2;
while(count<inputIndexRange){
    if(numberToCheck%2==0 || numberToCheck%3==0 || numberToCheck%5==0){
        dfgNumbersUptoIndex.push(numberToCheck);
        count++;
    }
    numberToCheck++;
}

console.log(dfgNumbersUptoIndex.join(" "));
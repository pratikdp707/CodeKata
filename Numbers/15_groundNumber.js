/*
Rahul was learning about numbers in list. He came across one word ground of a number.

A ground of a number is defined as the number which is just smaller or equal to the number given to you.
Hence he started solving some assignments related to it. He got struck in some questions. Your task is to help him.

O(n) time complexity

O(n) Auxilary space
*/

userInput = ["7 3",
    "1 2 3 4 5 6 7"];

userInput=["10 15",
    "1 2 3 4 5 6 7 8 9 10"]

userInput[0] = userInput[0].split(" ");
let groundToBeCheck = +userInput[0][1];
let inputArray = userInput[1].split(" ");

let ground = -1;
let groundIndex = -1;

for(let i=0 ; i<inputArray.length ; i++){
    if(+inputArray[i]<=groundToBeCheck && +inputArray[i]>ground){
        ground = inputArray[i];
        groundIndex = i;
    }
}
console.log(groundIndex);
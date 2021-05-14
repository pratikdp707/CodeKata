/**

Prateek finds it difficult to judge the minimum element in the list of elements given to him.
Your task is to develop the algorithm in order to find the minimum element.

 */

userInput = ["5","3 4 9 1 6"];

let inputArray =userInput[1].split(" ");

inputArray.sort( (a,b) => +a - +b);
console.log(inputArray[0]);
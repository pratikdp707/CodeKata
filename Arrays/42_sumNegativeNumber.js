userInput = ["2",
    "3 0"];

let inputArray = userInput[1].split(" ");
let sum = 0;

for(let i=0 ; i<inputArray.length ; i++){
    if(+inputArray[i] < 0)
        sum += +inputArray[i];
}

console.log(sum);
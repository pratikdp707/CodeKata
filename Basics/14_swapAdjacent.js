userInput = ["5",
"3 2 1 2 3"];

let inputArray = userInput[1].split(" ").map(n => +n);
let outputArray = [];

//console.log(inputArray.length);

for(let i=0 ; i<inputArray.length ; i += 2){
    if(inputArray[i+1] != undefined){
        outputArray.push(inputArray[i+1]);
        outputArray.push(inputArray[i]);
    }
    else
        outputArray.push(inputArray[i]);
    //console.log(outputArray);
}
console.log(outputArray.join(" "));
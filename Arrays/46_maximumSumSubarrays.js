userInput = ["4",
"-1 -2 -3 -4"];

let inputArray = userInput[1].split(" ");
let maximumSumOfSubarrays = 0;
let tempSumOfSubarrays;

for(let i=0 ; i<inputArray.length ; i++){
    tempSumOfSubarrays = 0;
    for(let j=i ; j<inputArray.length ; j++){
        tempSumOfSubarrays += +inputArray[j];
        if(maximumSumOfSubarrays == 0)
            maximumSumOfSubarrays = tempSumOfSubarrays;
        else if(tempSumOfSubarrays > maximumSumOfSubarrays)
            maximumSumOfSubarrays = tempSumOfSubarrays;
    }
}

console.log(maximumSumOfSubarrays);
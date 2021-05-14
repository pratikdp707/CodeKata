/*
You are given an array of digits. Your task is to print the digit with maximum frequency.
*/

userInput = ["7",
    "1 2 3 4 4 4 5"];

let inputArray = userInput[1].split(" ");
let frequency = {};
//loop to calculate the frequency of every element in array
for(let i=0 ; i<inputArray.length ; i++)
    frequency[inputArray[i]] = frequency[inputArray[i]] ? frequency[inputArray[i]]+1 : 1;

let maxFrequency = 0;
let mostFrequentElement;
//loop to find the element with maximum frequency in the object
for(const element in frequency){
    if(frequency[element] > maxFrequency){
            maxFrequency = frequency[element];
            mostFrequentElement = element;
    }
}

console.log(mostFrequentElement);
var userInput = ["10",
                "1 1 1 2 2 2 3 8 9 7",
                "5",
                "1 2 3 0 5"];

var frequency = {};
var numArray = userInput[1].split(" ");
var numbersToFindArray = userInput[3].split(" ");

var calculateFrequency = function(numArray){
    for(let i=0 ; i<numArray.length ; i++){
        var num = +numArray[i];
        frequency[num] = frequency[num] ? frequency[num]+1 : 1;
    }
}

calculateFrequency(numArray);
let countArray = [];

for(let j=0 ; j<numbersToFindArray.length ; j++){
    if(!frequency[numbersToFindArray[j]])
        countArray.push("Not Present");
    else
        countArray.push(frequency[numbersToFindArray[j]]);
}

console.log(countArray.join(" "));


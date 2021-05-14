userInput = ["5"];

let positionInSeries = +userInput[0];
let nthNumberOfSeries = 0;
let numberToBeAdded = 2; 

//loop to find nth element in the series
for(i=0;i<positionInSeries;i++){
    nthNumberOfSeries += numberToBeAdded;
    numberToBeAdded+=2;
}

console.log(nthNumberOfSeries);

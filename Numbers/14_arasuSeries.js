/*
you are given with ‘arasu’ series(shown in example).
You have to understand it and you will be given a number ‘n’ ,you have to print the series till n numbers.
*/

userInput = ["4"];

let nthPositionSeries = +userInput[0];

let arasuSeries = [2];
let coefficient = 3;

for(i=1; i<nthPositionSeries ; i++){
    arasuSeries.push(arasuSeries[i-1]+coefficient);
    coefficient +=2;
}

console.log(arasuSeries.join(" "));
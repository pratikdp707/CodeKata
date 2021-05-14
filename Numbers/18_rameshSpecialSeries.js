/*
Ramesh is given a special series to print,as he has some other work to do.Help ramesh in printing the series.
Note:Observe the series very keenly in examples
*/

userInput = ["6"];

let nthTermOfSeries = +userInput[0];

let factorial = function(number){
    let fact = 1;
    for(let i=1; i<=number ; i++)
        fact *= i;
    return fact;
}
let specialSeries = [];

for(let i=1; i<=nthTermOfSeries ; i+=2){
    specialSeries.push(factorial(i));
}

console.log(specialSeries.join(" "));
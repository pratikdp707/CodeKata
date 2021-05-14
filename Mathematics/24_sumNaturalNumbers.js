userInput = ["3"];

let naturalNumber = +userInput[0];

let sumOfFirstKNaturalNumber = function(number){
    let sum = 0;
    for( i=1 ; i<=naturalNumber ; i++)
        sum += i;
    return sum;
}

console.log(sumOfFirstKNaturalNumber(naturalNumber));
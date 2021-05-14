userInput = ["5"];

let number = +userInput[0];
let countPairs = 0 ;

var checkPairs = (originalNumber, numberOne, numberTwo) => numberOne+numberTwo == originalNumber;

for( i = 1 ; i < number ; i++){
    for( j = 1 ; j < number ; j++){
        if( checkPairs(number, i , j) )
            countPairs++;
    }
}

console.log(countPairs);

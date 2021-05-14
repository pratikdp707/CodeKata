/*
You are given with a number ‘n’. 
You have to count the pair of two numbers a and b such that sum of two numbers are equal to n.
Note:Both numbers lie in range 1<=a,b<n
*/

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

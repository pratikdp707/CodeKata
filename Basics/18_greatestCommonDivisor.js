/*
Given 2 numbers N,M find the GCD of N and M.If it cannot be found for given number(s) then print -1
*/

userInput = ["12 0"];

userInput[0] = userInput[0].split(" ").map(n => +n);

let numberOne = userInput[0][0];
let numberTwo = userInput[0][1];
let i;
let gcd = function(numOne, numTwo){
    if(numOne === 0 || numTwo === 0){
        console.log("-1");
        return 0;
    }
    for(i=numOne>numTwo ? numOne : numTwo ; i>=1; i--){
        if(numOne % i == 0 && numTwo % i == 0){
            console.log(i);
            break;
        }
    }
}

gcd(numberOne, numberTwo);

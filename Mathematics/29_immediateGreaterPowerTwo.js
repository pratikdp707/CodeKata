userInput = ["64"];

let numberToPowerOfTwo = +userInput[0];
let immediateGreaterPower = 0;

//function to calculate the nth root of number
let nthPower = function(number){
    let count =0;
    while(number!=1){
        number = number/2;
        count++;
    }
    return count;
}

let power = nthPower(numberToPowerOfTwo);

immediateGreaterPower = Math.pow(2,power+1);
console.log(immediateGreaterPower);
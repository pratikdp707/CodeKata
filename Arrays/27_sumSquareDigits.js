userInput = ["12"];

let number = userInput[0].split("");
let sumSquareDigits = 0;

for( i =0 ; i<number.length ; i++){
    sumSquareDigits += Math.pow(+number[i],2);
}

console.log(sumSquareDigits);
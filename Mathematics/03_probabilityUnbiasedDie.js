userInput = ["1"];
userInput[0] = +userInput[0];

var denominator = Math.pow(6,userInput[0]);
var numerator = 0;

for( i=0;i<userInput;i++){
    numerator += (Math.pow((5),i) * 1) * (denominator/Math.pow(6,i+1));
}

console.log(numerator +" "+ denominator);
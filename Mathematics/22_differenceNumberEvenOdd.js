userInput = ["5 5"];
let numberInput = userInput[0].split(" ");

var checkDifferenceEvenOdd = function(numberOne, numberTwo){
    let differenceOfNumber = numberOne-numberTwo;
    return differenceOfNumber % 2 == 0;
}

if(checkDifferenceEvenOdd(+numberInput[0], +numberInput[1])){
    console.log("even");
}
else
    console.log("odd")
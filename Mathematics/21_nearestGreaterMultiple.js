userInput = ["3"];

let inputNumber = +userInput[0];

let nearestGreateMultipleOfTen = function( inputNumber ) {
    let multipleOfTen = inputNumber
    while(true){
        if(multipleOfTen % 10 == 0)
            return multipleOfTen;
        else
            multipleOfTen++;
    }
}

console.log(nearestGreateMultipleOfTen(inputNumber));
userInput = ["13"];

let number = +userInput[0];

var checkPureNumber = function(number){
    let sum = 0;
    while(number != 0){
        let remainder = number%10;
        number = number/10;
        sum += remainder;
    }
    return sum%3 == 0;
}

if(checkPureNumber(number))
    console.log("yes");
else
    console.log("not");
userInput = ["121"];

let numberToBeChecked = +userInput[0];

var checkSaturated = function(number){
    let digitArray = [];
    while(number != 0){
        let remainder = number % 10;
        if(!digitArray.includes(remainder)){ 
            digitArray.push(remainder);
        }
        number = parseInt(number/10);
    }
    return digitArray.length == 2;
}

if( checkSaturated(numberToBeChecked) )
    console.log("Saturated");
else
    console.log("Unsaturated");
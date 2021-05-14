userInput = ["548"];

let number = userInput[0].split("");

var countDigits = function(number){
    let digitsArray =[];
    for( i =0 ; i<number.length ; i++){
        //if(!digitsArray.includes(number[i]))
        digitsArray.push(number[i]);
    }
    return digitsArray.length;
}

console.log(countDigits(number));
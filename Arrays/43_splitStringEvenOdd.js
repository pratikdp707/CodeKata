userInput = ["XCODE"];

let inputString = userInput[0];

let evenPositionCharacter = "";
let oddPositionCharacter = "";

for(let i=0 ; i<inputString.length ; i++){
    if(i%2==0)
        evenPositionCharacter += inputString.charAt(i);
    else
        oddPositionCharacter += inputString.charAt(i);
}

console.log(evenPositionCharacter +" "+ oddPositionCharacter);
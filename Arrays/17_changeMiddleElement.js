userInput = ["sarvesh"];


userInput[0] = userInput[0].split("");

var isEven = function(string){
    return string.length % 2 == 0;
}

if(isEven(userInput[0])){
    var index = userInput[0].length / 2;
    userInput[0][index] = '*';
    userInput[0][index-1] = '*';
}
else{
    var index = (userInput[0].length+1) / 2;
    userInput[0][index-1] = '*';
}
console.log(userInput[0].join(""));
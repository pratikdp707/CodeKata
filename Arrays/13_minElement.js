userInput = ["5", "3 4 9 1 6"];

userInput[1] = userInput[1].split(" ");

var minimum = +userInput[1][0];

for( i=1 ; i<userInput[1].length ; i++){
    if(minimum > userInput[1][i])
        minimum = userInput[1][i];
}

console.log(minimum);
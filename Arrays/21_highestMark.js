userInput = ["3",
    "82 96 72"];

userInput[1] = userInput[1].split(" ");

for( i=0 ; i<userInput[1].length ; i++){
    userInput[1][i] = +userInput[1][i];
}

userInput[1].sort( (a,b) => a-b );

console.log(userInput[1][userInput[1].length-1]);
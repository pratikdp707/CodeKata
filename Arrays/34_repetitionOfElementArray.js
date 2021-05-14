userInput = ["6 2", "1 2 2 5 7 8"];

userInput[0] = userInput[0].split(" ");
userInput[1] = userInput[1].split(" ");
let keyToBeSearched = +userInput[0][1];

let countOfRepetition = -1;

for( i =0 ; i<userInput[1].length ; i++){
    if(keyToBeSearched == userInput[1][i])
        countOfRepetition++;
}

console.log(countOfRepetition);
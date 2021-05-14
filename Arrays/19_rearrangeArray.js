userInput = ["5", "4 0 2 1 3"];

userInput[1] = userInput[1].split(" ");

var rearrangedArray = [];

for( i=0 ; i<userInput[1].length ; i++){
    rearrangedArray.push( userInput[1][userInput[1][i]] );
}

console.log(rearrangedArray);
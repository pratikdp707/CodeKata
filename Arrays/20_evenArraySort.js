userInput = ["5", "3 9 1 44 6"];

userInput[1] = userInput[1].split(" ");

for( i=0 ; i<userInput[1].length ; i+=2){
    for(j=0 ; j<userInput[1].length-2 ; j+=2){
        if(+userInput[1][j] > +userInput[1][j+2]){
            var temp = userInput[1][j];
            userInput[1][j] = userInput[1][j+2];
            userInput[1][j+2] = temp;
        }
    }
}

console.log(userInput[1].join(" "));
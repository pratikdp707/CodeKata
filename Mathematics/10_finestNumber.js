var userInput = ["2", "1729 189"];
userInput[1] = userInput[1].split(" ");

for( i=0 ; i<userInput[1].length ; i++)
    userInput[1][i] = +userInput[1][i];

userInput[1].sort((a,b) => a-b);
//console.log(userInput[1]);

var finestNumber = [];

for( i=0 ; i<userInput[1].length ; i++){
    for( j=1 ; j<userInput[1][i] ; j++){
        var num = Math.pow(j,3) +Math.pow((j+1),3);
        if(num == userInput[1][i]){
            finestNumber.push(userInput[1][i]);
            break;
        }
    }
}

console.log(finestNumber.join(" "));
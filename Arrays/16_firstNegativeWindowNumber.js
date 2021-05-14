userInput = ["7",
    "1 -2 -3 -4 5 6 -7",
    "3"];

userInput[1] = userInput[1].split(" ");    

var firstNegative = [];

for( i=0 ; i <= userInput[1].length-(+userInput[2]) ; i++){
    var flag =0;
    for( j=i ; j < i + (+userInput[2]) ; j++){
        if((+userInput[1][j]) < 0){
            firstNegative.push(userInput[1][j]);
            flag =1;
            break;
        }
    }
    if(flag == 0)
        firstNegative.push(0);
}

console.log(firstNegative.join(" "));
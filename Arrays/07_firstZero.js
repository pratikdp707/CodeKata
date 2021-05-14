var userInput = ["7 2" , "0 0 0 0 0 0 0 0 0"];
userInput[0] = userInput[0].split(" ");
userInput[1] = userInput[1].split(" ");

var firstZero = [];

for( i=0 ; i<=userInput[1].length - (+userInput[0][1]) ;i++){
    var flag = 0;
    for( j=i ; j<i+(+userInput[0][1]) ; j++){
        if(userInput[1][j] == 0){
            firstZero.push(j+1);
            flag = 1;
            break;
        }
    }
    if(flag == 0)
        firstZero.push(-1);
}
console.log(firstZero.join(" "));

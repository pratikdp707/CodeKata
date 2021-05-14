var userInput = ["2143"];

userInput[0] = userInput[0].split("");

//console.log(userInput[0]);

var oddArray =[];
var flag = 0;

for(i = 0 ; i<userInput[0].length ; i++){
    if(+userInput[0][i] % 2 != 0){
        oddArray.push(userInput[0][i]);
        flag = 1 ;
    }    
}
if(flag == 0)
    oddArray.push(-1);

console.log(oddArray.join(" "));

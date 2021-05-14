var userInput = ["0000000"]
userInput[0] = userInput[0].split("");

var count =0;
var max = count;

if(!userInput[0].includes('1'))
    max = -1
else{
for(i = 0 ; i < userInput[0].length ; i++){
    if(userInput[0][i] == 1)
        count++;
    else{
        if(count > max){
            max = count;
        }
        count =0;
    }
}
}
if(max < count && max!=-1)
    max = count
console.log(max);
userInput = ["7", "1 1 11 121 131 141 98"];

userInput[1] = userInput[1].split(" ");

var frequency = {};
for(i=0 ; i<userInput[1].length ; i++){
    var num = +userInput[1][i];
    frequency[num] = frequency[num] ? frequency[num]+1 : 1;
}

var flag = 0;
var duplicates = [];
for(i=0 ;i<userInput[1].length ; i++){
    if(frequency[userInput[1][i]] > 1){
        if(!duplicates.includes(userInput[1][i]))
            duplicates.push(userInput[1][i]);
    }
}

console.log(duplicates.join(" "));
userInput = ["10",
    "1 1 1 2 2 2 3 8 9 7",
    "5",
    "1 2 3 0 5"];

userInput[1] = userInput[1].split(" ");
userInput[3] = userInput[3].split(" ");

var frequency = {};
for(i=0 ; i<userInput[1].length ; i++){
    var num = +userInput[1][i];
    frequency[num] = frequency[num] ? frequency[num]+1 : 1;
}

var tracker = [];

for(i=0 ; i<userInput[3].length ; i++){
    if(frequency[userInput[3][i]])
        tracker.push( frequency[userInput[3][i]] )
    else
        tracker.push("Not Present")
}

console.log(tracker.join(" "));
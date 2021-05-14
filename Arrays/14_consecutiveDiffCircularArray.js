userInput = ["5 11", "50 65 85 98 35 95 35 26 12 10"];

userInput[0] = userInput[0].split(" ");
userInput[1] = userInput[1].split(" ");

var diffOfConsecutive = [];

var negToPos = function(number){
    if(number < 0)
        return number * -1;
    return number;
}
 
for( i=0 ; i<userInput[1].length ; i++){
    var diff = negToPos((+userInput[1][i]) - (+userInput[1][ (i+1) % userInput[1].length ]));
    if(diff > +userInput[0][1])
        diffOfConsecutive.push(1);
    else
        diffOfConsecutive.push(0);
}

console.log(diffOfConsecutive.join(" "));
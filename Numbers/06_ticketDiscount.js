/*
Assume that you are ticket verifier at a club. 
Your club has decided to give a special discount to the person(s) who are satisfying the following condition
Condition:-

If ticket number is divisible by date of month. You are eligible for a discount.
*/
userInput = ["6", "10 165 895 654 123 78 9 64 21 322", "10"];

userInput[1] = userInput[1].split(" ");
var date = +userInput[2];
var discount = [];
for(i=0 ; i<userInput[1].length ; i++){
    if(+userInput[1][i] % userInput[2] ==0)
        discount.push(1)
    else
        discount.push(0);
}

console.log(discount.join(" "));
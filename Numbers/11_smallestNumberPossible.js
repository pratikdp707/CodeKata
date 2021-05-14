/*
You are given a very long integer.
Your task is to determine the smallest possible number such that sum of factorial of digits results back in ‘n’. 
Print -1 if no number is possible
*/

userInput = ["145"];

let inputNumber = +userInput[0];

//factorial function
let factorial = function(number){
    let fact =1;
    for(let i=1 ; i<=number ; i++)
        fact *= i;
    return fact;
}

//function to check sum of factorial of digits equal to input
let checkSumFactInput = function(numArray , actualNumber){
    let sum = 0;
    for(let i=0 ; i<numArray.length ; i++)
        sum+= factorial(+numArray[i]);
    
    //console.log(sum);
    return sum==actualNumber;
}

// console.log(checkSumFactInput(["1","8"],40321));
let flag =1;
for(let i=1 ; i<= inputNumber ; i++){
    let numArray = (""+i).split("");
    if(checkSumFactInput(numArray,inputNumber)){
        console.log(i);
        return 0;
    }
}
console.log("-1");


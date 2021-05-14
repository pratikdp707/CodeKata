userInput = ["5 5"];

userInput[0] = userInput[0].split(" ").map(n => +n);

let productOfInputNumbers = userInput[0][0] * userInput[0][1];

const isPerfectSquare = (num =>{
    let i =1;
    while(i * i <= num){
        if(i * i !== num){
            i++;
            continue;
        }
        return "yes";
    }
    return "no";
});

console.log(isPerfectSquare(productOfInputNumbers));



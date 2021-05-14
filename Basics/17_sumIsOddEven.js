userInput = ["9 2"];

userInput[0] = userInput[0].split(" ").map(n => +n);

let sumOfInputNumber = userInput[0][0] + userInput[0][1];

const isOddEven = (num => {
    if(num % 2 === 0)
        return "even";
    return "odd";
});

console.log(isOddEven(sumOfInputNumber));
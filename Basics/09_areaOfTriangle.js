userInput = ["2 4"];

userInput[0] = userInput[0].split(" ").map(n => +n);

let baseOfTriangle = userInput[0][0];
let heightOfTriangle = userInput[0][1];

console.log(1 / 2 * baseOfTriangle * heightOfTriangle);
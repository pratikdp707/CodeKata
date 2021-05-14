userInput = ['123'];

let number = +userInput[0];
let flag = 0;

for(let i = 2 ; i < number ; i++){
    if(number % i == 0){
        console.log("yes");
        flag = 1;
        break;
    }
}
if(flag == 0)
    console.log("no");
userInput= ["48"];

let inputNumber = +userInput[0];

for(let i=0 ; ; i++){
    if(Math.pow(2,i) > inputNumber){
        console.log(Math.pow(2,i));
        break;
    }
}
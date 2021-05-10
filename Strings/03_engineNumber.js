/*
Problem Statement
In XYZ country there is rule that car’s engine no. depends upon car’ number plate. 
Engine no is sum of all the integers present on car’s Number plate.
The issuing authority has hired you in order to provide engine no. to the cars.
Your task is to develop an algorithm which takes input as in form of string(Number plate) and gives back
Engine number.
*/

userInput = ["HR05-AA-2669"];

let carNumber = userInput[0];
//function to find the engine number of car 
let findEngineNumber = function(carNum){
    let sum =0;
    for(let i=0; i<carNum.length ; i++){
        if( (carNum.charCodeAt(i)>=65 && carNum.charCodeAt(i)<=90) || carNum.charCodeAt(i) == 45){
            continue;
        }
        else{
            sum += +carNum[i];
        }
    }
    return sum;
}

console.log(findEngineNumber(carNumber));
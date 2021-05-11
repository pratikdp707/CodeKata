/*
55555
4444
333
22
1
*/

userInput = ["5"];

let range = +userInput[0];
let s;

for(let i=range ; i>0 ; i--){
    s = "";
    for(let j=0 ; j<i ; j++){
        s+= i;
    }
    console.log(s);
}
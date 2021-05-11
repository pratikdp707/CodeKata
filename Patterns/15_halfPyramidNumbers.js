/*

1
22
333
4444
55555

*/

userInput = ["5"];

let range = +userInput[0];
let s;

for(let i=1 ; i <=range ; i++){
    s = "";
    for(let j=0 ; j<i ; j++){
        s+= i;
    }
    console.log(s);
}
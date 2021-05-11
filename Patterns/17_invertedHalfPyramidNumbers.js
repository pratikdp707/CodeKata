/*

12345
1234
123
12
1

*/

userInput = ["5"];

let range = userInput[0];
let s;

for(let i=range ; i>0 ; i--){
    s = "";
    for(let j=1 ; j<=i ; j++){
        s += j;
    }
    console.log(s);
}
/*
1
12
123
1234
12345
*/

userInput = ["8"];

let range = +userInput[0];
let s ="";
for(i=1 ; i <= range ; i++){
    s = "";
    for(let j=1 ; j<=i ; j++){
        s+=j;
    }
    console.log(s)
}
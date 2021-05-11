/*

1234567
12345
123
1

*/

userInput = ["4"];

let range = +userInput[0];
let s;

for(let i= (range*2)-1 ; i>=1 ; i-=2){
    s = "";
    for(let j=1 ; j<=i ; j++)
        s += j;
    console.log(s);
}
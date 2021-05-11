/*

*****
b****
bb***
bbb**
bbbb*

*/

userInput = ["5"];

range = +userInput[0];
let s;

for(let i=1 ; i<=range ; i++){
    s = "";
    for(let j=1 ; j<=range ; j++){
        if(j<i)
            s += "b";
        else
            s += "*";
    }
    console.log(s);
}
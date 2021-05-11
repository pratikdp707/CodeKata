/**
 
*****
 ****
  ***
   **
    *

 */


userInput = ["5"];

let range = userInput[0];
let s;

for(let i=range ; i>0 ; i--){
    s = "";
    for(let j=range ;j>i ; j--)
        s+=" ";
    for(let k=1 ; k<=i ; k++)
        s+="*"
    console.log(s);
}
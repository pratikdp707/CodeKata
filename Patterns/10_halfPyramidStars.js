/*
     *
    **
   ***
  ****
 *****
******
*/


userInput = ["6"];

let range = +userInput[0];
let s;

for(let i = 1; i <= range ; i++){
    s = "";
    for(let j=range ; j>0 ; j--){
        if(j<=i)
            s += "*";
        else
            s += " "; 
    }
    console.log(s);
}
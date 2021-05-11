/*

*  *  *  *  *
*  *  *  *
*  *  *
*  *
*

*/

userInput = ["5"];

let range = +userInput[0];
let s;

for(let i=range ; i>0 ; i--){
    s= "";
    for(let j=i ; j>0 ; j--){
        if(j==i)
            s += "*";
        else
            s += "  *"; 
    }
    console.log(s);
}
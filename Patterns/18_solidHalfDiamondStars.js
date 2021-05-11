/*

* 
** 
***
****
*****
**** 
*** 
** 
* 
*
**
***
****
*****
****
***
**
*
*/

userInput = ["5"];

let range = userInput[0];
let s;

for(let i=0 ; i<range ; i++){
    s = "";
    for(let j =0 ; j<=i ; j++){
        s += "*";
    }
    console.log(s);
}
for(let i=range-1 ;i>0 ;i--){
    s="";
    for(let j=i ;j>0 ;j--){
        s+="*";
    }
    console.log(s);
}
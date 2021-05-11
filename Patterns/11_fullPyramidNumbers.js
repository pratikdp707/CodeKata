/*
    1
   232
  34543
 4567654
5567898765

*/

userInput = ["5"];

let range = +userInput[0];
let s;
let startNumber;
for(let i=1 ; i<=range  ; i++){
    startNumber = i;
    s = "";
    revereseString = "";
    //logic to calculate half string 
    //example:56789
    for(let j=range ; j>0 ; j--){
        if(j <= i){
            s += startNumber
            startNumber++;
        }
        else{
            s += " ";
        }
    }
    //logic to reverse the substring of original string
    revereseString = s.substring(s.length-i,s.length-1).split("").reverse().join("");
    //console.log(revereseString);
    console.log(s+revereseString);
}

/*
* * * * *
* * * * *
* * * * *

*/

userInput = ["3 5"];
userInput[0] = userInput[0].split(" ");

let rowCount = +userInput[0][0];
let columnCount = +userInput[0][1];

for(let i=1 ; i<= rowCount ; i++){
    let s= "";
    for(let j=1;j<= columnCount ; j++){
        if(j==columnCount)
            s += "*";
        else
            s += "* " ;
        
    }
    console.log(s);
}
/*
12345
4321
123
21
1
*/

userInput = ["8"];

let range = +userInput[0];
let count =1;

for(let i=range ; i>=1 ; i--){
    let s="";
    if(count%2 == 0){
        for(j=i ; j>=1 ;j--)
            s += j;
    }
    else{
        for(j=1 ; j<=i ; j++)
            s += j;
    }
    console.log(s);
    count++;
}
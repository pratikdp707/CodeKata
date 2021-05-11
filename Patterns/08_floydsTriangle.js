/*

1
2 3
4 5 6
7 8 9 10
11 12 13 14 15

*/

userInput = ["5"];

let range = +userInput[0];
let numberToPrint = 1;

for(i=0 ; i<range ; i++){
    let s= "";
    for(let j=0 ; j<=i ; j++){
        if(j == i)
            s+=numberToPrint;
        else
            s+=numberToPrint+" ";
        numberToPrint++;
    }
    console.log(s);
}

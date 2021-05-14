userInput =["5", "5 25 35 -5 30"];

let beautifulArray = userInput[1].split(" ");
let sum = 0;

for( i=0 ; i<beautifulArray.length ; i++){
    sum += +beautifulArray[i];
}

if( sum % 2 == 0 && sum % 3 == 0 && sum % 5 == 0)
    console.log("1");
else
    console.log("0");
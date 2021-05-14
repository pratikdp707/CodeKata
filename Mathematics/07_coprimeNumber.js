userInput = ["3 5"];
userInput[0] = userInput[0].split(" ");

var numOne = +userInput[0][0];
var numTwo = +userInput[0][1];
var hcf ;
for(i =0 ; i<numOne && i<numTwo ; i++)
    if(numOne % i ==0 && numTwo %i==0)
        hcf = i;

if(hcf == 1)
    console.log("1");
else    
    console.log("0");
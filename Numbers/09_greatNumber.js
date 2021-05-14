/*
You are given a number ‘n’. You have to tell whether a number is great or not. 
A great number is a number whose sum of digits let (m) and product of digits let(j) when summed together gives the number back
m+j=n
*/

var userInput =["59"];
    var number = +userInput[0];
    userInput[0] = userInput[0].split("");

    var numOne = +userInput[0][0];
    var numTwo = +userInput[0][1];
    //console.log(numOne +" "+ numTwo);

    var addition = numOne+numTwo;
    var multiplication = numOne * numTwo;
    //console.log(addition +" "+multiplication);

    var resultant = addition + multiplication;
    //console.log(resultant);

    if(resultant == number)
        console.log("Great");
    else{
        console.log("Not Great");
    }
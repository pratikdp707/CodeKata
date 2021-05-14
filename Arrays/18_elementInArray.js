userInput = ["4 8",
    "1 2 3 3"];

userInput[0] = userInput[0].split(" ");
userInput[1] = userInput[1].split(" ");

var ifPresent = function(element, myArray){
    return myArray.includes(element);
}

if( ifPresent(userInput[0][1], userInput[1] ) )
    console.log("yes");
else
    console.log("no");
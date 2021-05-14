userInput = ["2 3", "1 1 1", "1 0 0"];
//code to convert userInput into array
for(i=0 ; i<userInput.length ; i++){
    userInput[i] = userInput[i].split(" ");
}

let ramWinningCount = 0;
let sitaWinningCount = 0;

//function to count number of times Ram and Sita won the game 
let winningCount = function(winningArray){
    for( j=0 ; j<winningArray.length ; j++){
        if(+winningArray[j] == 0)
            ramWinningCount++;
        else
            sitaWinningCount++;
    }
}

//call the winningCount function
for( i = 1 ; i <= +userInput[0][0] ; i++){
    winningCount(userInput[i]);
}

console.log("RAM: "+ramWinningCount);
console.log("SITA: "+sitaWinningCount);
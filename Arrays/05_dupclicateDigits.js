var userInput = "1331";

var numArray = userInput.split("");
for(i=0 ; i<numArray.length ; i++){
    numArray[i] = +numArray[i];
}

var distinctDigits = [];
var j = 0;
for(i=0 ; i<numArray.length ; i++){
    if(numArray[i] == numArray[i+1]){
        i++;
    }
    else{
        distinctDigits[j] = numArray[i];
        j++; 
    }
}

console.log(distinctDigits.join(""));
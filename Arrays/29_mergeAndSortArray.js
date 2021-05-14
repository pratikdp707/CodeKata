userInput = ["5",
    "1 9 16 25 46",
    "2 3 4 5 6"];

var arrayOne = userInput[1].split(" ");
var arrayTwo = userInput[2].split(" ");

var mergedArray = [];
var sum ;

var findSumMiddleTwoElement = function(mergedArray){
    mergedArray.sort( (a,b) => a-b);
    return mergedArray[mergedArray.length/2 - 1]+ mergedArray[mergedArray.length/2];
}

for( i = 0 ; i<+userInput[0] ;i++){
    mergedArray.push(+arrayOne[i]);
    mergedArray.push(+arrayTwo[i]);
}
sum = findSumMiddleTwoElement(mergedArray);
console.log(sum);
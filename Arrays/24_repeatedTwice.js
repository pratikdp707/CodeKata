userInput = ["5", "11 11 11 95 95 95 65 65 65 56 56"];
let repeatedNumberArray = userInput[1].split(" ");

let distinctNumberCount = {};

for( i=0 ; i<repeatedNumberArray.length ; i++){
    distinctNumberCount[repeatedNumberArray[i]] = distinctNumberCount[repeatedNumberArray[i]] ? distinctNumberCount[repeatedNumberArray[i]]+1 : 1;
}

console.log(distinctNumberCount);

for (const element in distinctNumberCount){
    if(distinctNumberCount[element] == 2){
        console.log(element);
        break;
    }
}
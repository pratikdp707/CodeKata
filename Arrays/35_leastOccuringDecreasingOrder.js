var userInput = ["7","99 99 99 99 99 99 99"];
//var userInput = ["9","1 3 7 6 5 4 3 3 3 3 4 5 2 2 1 4 5 6 7 8 9 6 5 4 6 7 8"];
var frequency = {};
var numArray = userInput[1].split(" ");
for(i=0 ; i<numArray.length ; i++){
    var num = +numArray[i];
    frequency[num] = frequency[num] ? frequency[num]+1 : 1;
}
var least = frequency[numArray[0]];
for( i=1 ; i<numArray.length ; i++){
    if(frequency[numArray[i]] < least)
        least = frequency[numArray[i]];
}
var leastOccurence = [];
for( i=0 ; i<numArray.length ; i++){
    if(frequency[numArray[i]] == least)
        if(!leastOccurence.includes(+numArray[i]))
            leastOccurence.push(+numArray[i]);
}
leastOccurence.sort((a,b) => b-a);
console.log(leastOccurence.join(" "));
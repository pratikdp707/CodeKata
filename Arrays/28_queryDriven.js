userInput = ["5",
    "1 60",
    "2",
    "1 58",
    "2",
    "1 69"];

var minimumElement = function(myArray){
    if(myArray.length == 0)
        return -1;
    myArray.sort( (a,b) => a-b );
    return myArray[0];
}

let storedList = [];
let minElementList = [];

for( i=0 ; i<+userInput[0] ; i++){
    let tempArray = userInput[i].split(" ");
    if(tempArray[0] == 1){
        storedList.push(+tempArray[1]);
        continue;
    }
    else if(tempArray[0] == 2){
        let minElement = minimumElement(storedList);
        minElementList.push(minElement);
    }
}

console.log(minElementList.join(" "));


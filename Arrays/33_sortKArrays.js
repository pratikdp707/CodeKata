userInput = ["3",
            "2",
            "98 12",
            "6",
            "1 2 3 8 5 9",
            "1",
            "11"];

let numberOfArray = +userInput[0];
let sortedKArrays = [];

//function to sort kth array and push it to sortedKArrays
let sortAndPush = function(myArray){
    myArray.sort( (a,b) => a-b);
    for(let i=0 ; i<myArray.length ; i++){
        sortedKArrays.push(myArray[i]);
    }
}

for(let i=2; i<userInput.length ; i+=2){
    sortAndPush(userInput[i].split(" "));
}

console.log(sortedKArrays.join(" "));
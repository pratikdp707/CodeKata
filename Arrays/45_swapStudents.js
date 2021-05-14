userInput = ["5",
"1 5 4 3 2"];

let studentsHeight = userInput[1].split(" "); 
//console.log(studentsHeight);

let swapCount = 0;

for(let i=0 ; i<studentsHeight.length-1 ; i++){
let minimumElement = studentsHeight[i];
let indexMinimumElement = i;

//loop to find the minimum element in the array after the index i
for(let j = i+1 ; j<studentsHeight.length ; j++){
    if(minimumElement > studentsHeight[j]){
        minimumElement = studentsHeight[j];
        indexMinimumElement = j;
    }
}
if(indexMinimumElement != i){
    let temp = studentsHeight[indexMinimumElement];
    studentsHeight[indexMinimumElement] = studentsHeight[i];
    studentsHeight[i] = temp;
    swapCount++;
}
}
//console.log(studentsHeight);
console.log(swapCount);
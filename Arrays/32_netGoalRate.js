userInput = ["5", "95 85 75 12 11"];

let goalRateArray = userInput[1].split(" ");
let netGoalRateArray = [];

//function for calculating the sum of goals score by last Three team
let sumOfLastThreeTeam = function(goalArray){
    let sum = 0;
    for(i = goalArray.length-1 ; i>=goalArray.length-3 ; i--){
        sum += +goalArray[i];
    }
    return sum;
} 

sumOfGoalsLastThree = sumOfLastThreeTeam(goalRateArray);

//calculating net goal rate
for (i=0 ; i<goalRateArray.length ; i++){
    netGoalRateArray.push(+goalRateArray[i] - sumOfGoalsLastThree);
}

console.log(netGoalRateArray.join(" "));

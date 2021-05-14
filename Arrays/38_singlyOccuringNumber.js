userInput= ["5",
    "1 1 2 5 5"];

let dieRollValue = userInput[1].split(" ");

for(let i=0 ; i<dieRollValue.length ; i++){
    if(dieRollValue.indexOf(dieRollValue[i]) == dieRollValue.lastIndexOf(dieRollValue[i])){
        console.log(dieRollValue[i]);
        break;
    }
}
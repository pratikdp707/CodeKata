userInput = ["2 5",
    "2 3 0 7 1 5 3 4 1 8",
    "11"];

let prisonersIDArray = userInput[1].split(" ");
let searchPrisonerID = userInput[2];

if(prisonersIDArray.includes(searchPrisonerID))
    console.log("yes");
else
    console.log("no");
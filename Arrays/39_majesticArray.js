userInput = ["7",
    "1 2 3 4 6 0 0"];

let majesticArray = userInput[1].split(" ");

let sumFirstThreeElement = +majesticArray[0] + +majesticArray[1] + +majesticArray[2];
let sumLastThreeElement = +majesticArray[majesticArray.length-1] + +majesticArray[majesticArray.length-2]
                            + +majesticArray[majesticArray.length-3];

if(sumLastThreeElement == sumFirstThreeElement)
    console.log("1");
else
    console.log("0");
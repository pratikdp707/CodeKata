userInput=["5",
    "2004 1999 2019 2009 2014",
    "JDU JDU CON JDU CON"];

userInput =["5",
    "2005 1990 1995 1985 2000",
    "A B B B B"];

let electionYear = userInput[1].split(" ").map(n => +n);
let electionWon = userInput[2].split(" ");

electionWon.sort((a,b) => electionYear[electionWon.indexOf(a)]-electionYear[electionWon.indexOf(b)]);
electionYear.sort((a,b) => (a-b));
 console.log(electionWon);
 console.log(electionYear);

let consecutiveParty = electionWon[0];
let consecutiveCount =1;

for(let i=1; i<electionWon.length ; i++){
    if(consecutiveParty === electionWon[i])
        consecutiveCount++;
    else{
        if(consecutiveCount>=1){
            console.log(electionYear[i]);
            break;
        }
        else{
            consecutiveCount =1;
            consecutiveParty =electionWon[i];
        }
    }
}
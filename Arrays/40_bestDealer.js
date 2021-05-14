userInput = ["3",
    "2100 8880 2110 9000 12000"];

let dealerPrices = userInput[1].split(" ");
let bestDealerID = 0;

for(let i=1 ; i<dealerPrices.length ; i++){
    if(+dealerPrices[i] < +dealerPrices[bestDealerID])
        bestDealerID = i;
}

console.log("Dealer"+bestDealerID);
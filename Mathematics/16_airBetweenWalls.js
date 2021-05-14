userInput = ["3", "0 1 0 2 1 0 1 3 2 1 2 1"];

let heightOfWalls = userInput[1].split(" ");
let smallWall ;
let airEncapsulated = 0 ;

var minHeight = function(wallOneHeight, wallTwoHeight){
    return wallOneHeight-wallTwoHeight < 0 ? wallOneHeight : wallTwoHeight;
}

for(i=1 ; i<heightOfWalls.length-1 ; i++){
    let width = 1;
    let j = i-1;
    let k = i+1;
    while(j>=0 && k<=heightOfWalls.length-1){
        if(+heightOfWalls[j] > +heightOfWalls[i] && +heightOfWalls[k] > +heightOfWalls[i]){
            smallWall = minHeight(+heightOfWalls[j], +heightOfWalls[k]);
            // console.log(smallWall);
            // console.log(heightOfWalls[i]);
            // console.log(width);
            airEncapsulated += width * (smallWall - +heightOfWalls[i] )  
            break;
        }
        else if(+heightOfWalls[j] < +heightOfWalls[i] && +heightOfWalls[k] < +heightOfWalls[i]){
            j--;
            k++;
            width +=2; 
        }
        else if(+heightOfWalls[j] < +heightOfWalls[i]){
            j--;
            width +=1;
        }
        else{
            k++;
            width +=1;
        }
    }
}

console.log(airEncapsulated);
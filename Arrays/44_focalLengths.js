userInput = ["8",
    "32 56 31 2846 23 57 75 12"];

// focalLengths = userInput[1].split(" ");

// focalLengthIndices = [];
// for(let i=0 ; i<focalLengths.length ; i++){
//     focalLengthIndices.push(i);
// }

// //sorting the focalLengthIndices wrt to values present in focalLengths for indices in focalLengthIndices.
// focalLengthIndices.sort((a,b) => focalLengths[b] - focalLengths[a]);
// console.log(focalLengthIndices.join(" "));


    var focalLengths = userInput[1].split(" ");

    var focalLengthIndices = [];

    for(let i=0 ; i<focalLengths.length ; i++){
        focalLengthIndices.push(focalLengths[i]);
    }


    focalLengthIndices.sort((a,b) =>b-a);

    let result=[];


    for(let i=0;i<focalLengthIndices.length;i++){

        for(let j=0;j<focalLengths.length;j++){
            if(focalLengthIndices[i]==focalLengths[j]){
                result.push(j);
            }
        }
    }
    
    console.log(result.join(" "));
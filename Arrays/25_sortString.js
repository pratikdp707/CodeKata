userInput = ["3", "Pratik Prajwal Piyush"];

let stringsList = userInput[1].split(" ");

for( i=0 ; i<stringsList.length-1; i++){
    for(j=i+1 ; j<stringsList.length ; j++){
        if(stringsList[i].charCodeAt(0) > stringsList[j].charCodeAt(0)){
            let temp = stringsList[i];
            stringsList[i] = stringsList[j];
            stringsList[j] = temp;
            continue;
        }
        else if(stringsList[i].charCodeAt(0) == stringsList[j].charCodeAt(0)){
            let index = 1;
            while(index < stringsList[i].length && index<stringsList[j].length){
                if(stringsList[i].charCodeAt(index) > stringsList[j].charCodeAt(index)){
                    let temp = stringsList[i];
                    stringsList[i] = stringsList[j];
                    stringsList[j] = temp;
                    break;
                }
                if(stringsList[i].charCodeAt(index) == stringsList[j].charCodeAt(index)){
                    index++;
                }
                else{
                    break;
                }
            }
        }
    }
}

console.log(stringsList.join(" "));
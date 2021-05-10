/*
Problem Statement
Joyal was given a sentence. His task is to delete the two words that comes together and print the sentence so that the words in the output sentence have distinct words compared to their adjacent words. 
If no words are present in the output sentence print -1
*/

userInput = ["We love we love"];

let wordsInInputString = userInput[0].split(" ");

let distinctWordsFromString = wordsInInputString;
//function to remove redundant adjacent words from string 
let removeAdjacentSimilarWords = function(){
    for(let i=0 ; i<distinctWordsFromString.length ; i++){
        if(distinctWordsFromString[i] == distinctWordsFromString[i-1]){
            distinctWordsFromString.splice(i-1,2);
            i-=2;
        }
        if(distinctWordsFromString[i] == distinctWordsFromString[i+1]){
            distinctWordsFromString.splice(i,2);
            i-=1;
        }
    }
}

//console.log(wordsInInputString.filter())

removeAdjacentSimilarWords();
console.log(distinctWordsFromString.join(" "));
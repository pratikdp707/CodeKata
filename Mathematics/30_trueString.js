userInput = ["raja"];

let trueString = userInput[0];

//function to find sum of ascii values of vowels
let sumAsciiVowel = function(string){
    let sum = 0;
    for(let i=0; i<string.length ; i++){
        if(string[i] =='a' || string[i] =='e' || string[i] =='i' || string[i] =='o' || string[i] =='u')
            sum += string.charCodeAt(i);
    }
    return sum;
}

let sumOfAscii = sumAsciiVowel(trueString);

if(sumOfAscii % 8 == 0)
    console.log("1");
else
    console.log("0");
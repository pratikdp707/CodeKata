userInput = ["10"];

let range = +userInput[0];
let countPalindrome = 0;

var checkPalindrome = function(number){
    let revNumber = 0;
    let originalNumber = number;
    while(number != 0){
        let remainder = number % 10;
        revNumber = revNumber*10 + remainder;
        number = parseInt(number/10);
    }
    return originalNumber == revNumber;
}

for( i=1 ; i <= range ; i++){
    if(checkPalindrome(i))
        countPalindrome++
}

console.log(countPalindrome);
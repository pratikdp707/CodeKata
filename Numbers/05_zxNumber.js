/*
A ‘zx’ number is a number which is formed from the sum of 3 numbers ,and the three numbers are such that their hcf equal to 1.
*/

userInput = ["7"];

let zxNumber = +userInput[0];

let isPrime = function(number){
    if(number == 2)
        return true;
    for(let i=2 ; i<=number/2 ; i++){
        if(number%i ==0)
            return false;
    }
    return true;
};

let pushPrimeIntoArray = function(number){
    for(let i=2 ; i<number ; i++){
        if(isPrime(i))
            primeNumberArray.push(i);
    }
}

let factorArray = [];
let primeNumberArray =[];
let factorsSum = 0;

if(zxNumber % 3 == 0){
    if(isPrime(zxNumber/3)){
        console.log(zxNumber/3+" "+zxNumber/3+" "+zxNumber/3);
    }
}

else{
    pushPrimeIntoArray(zxNumber);
    factorsSum = primeNumberArray[0];
    factorArray.push(primeNumberArray[0]);
    let tempSum = factorsSum;
    for(let i=primeNumberArray.length-1 ; i>=0 ;i--){
        tempSum = factorsSum;
        if(isPrime(primeNumberArray[i])){
            tempSum += primeNumberArray[i];
            if(tempSum<zxNumber){
                factorsSum += primeNumberArray[i];
                factorArray.push(primeNumberArray[i]);
                break;
            }
        }
    }
    for(let i=0 ; i<primeNumberArray.length ;i++){
        tempSum = factorsSum;
        if(isPrime(primeNumberArray[i])){
            tempSum += primeNumberArray[i];
            if(tempSum==zxNumber){
                factorsSum += primeNumberArray[i];
                factorArray.push(primeNumberArray[i]);
                break;
            }
        }
    }
    if(factorsSum == zxNumber && factorArray.length!=3)
        console.log("-1");
    else
        console.log(factorArray.join(" "));
}
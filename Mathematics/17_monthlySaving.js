userInput = ["1"];
userInput[0] = +userInput[0];

var savings = [1000, 1000];

for(i=1 ; i<userInput ; i++){
    savings.push(savings[i]+savings[i-1]);
}

var sum =0;

for(i=0 ; i<savings.length;i++){
    sum = sum+savings[i];
}

console.log(sum);
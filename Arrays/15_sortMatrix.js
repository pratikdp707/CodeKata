userInput = ["3 3", "87 21 34", "89 32 78", "12 23 45"];

userInput[0] = userInput[0].split(" ");
for(i=1 ; i<=userInput[0][0] ; i++){ 
    userInput[i] = userInput[i].split(" ");
}

var matrixElement = [];
var matrix = [];

for( i=1 ; i<=userInput[0][0] ; i++){
    for( j=0 ; j<userInput[0][1] ; j++){
        userInput[i][j] = +userInput[i][j];
        matrixElement.push( +userInput[i][j] );
    }
    matrix.push(userInput[i]);
}

matrixElement.sort( (a,b) => a-b );
var l =0;

for( i=0 ; i< +userInput[0][0] ; i++){
    for( j=0 ; j< +userInput[0][1] ; j++){
        matrix[i][j] = matrixElement[l];
        l++;
    }
    console.log(matrix[i].join(" "));
}

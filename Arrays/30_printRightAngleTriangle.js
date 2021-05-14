userInput = ["3"];
let heightOfTriangle = +userInput[0];

//to print the right angle triangle of "1" for with height as heightOfTriangle
for( i= 1 ; i<=heightOfTriangle ; i++){
    let rightAngleTriangleArray = [];
    for(j=0 ; j< (i*2)-1 ; j++){
        rightAngleTriangleArray.push(1);
    }
    console.log(rightAngleTriangleArray.join(" "));
}

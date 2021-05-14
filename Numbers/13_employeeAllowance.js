// 4
// 23 MARCH 1996 23 MARCH 1986 22 JULY 1987 23 APRIL 1987
/*
You are an employee of ‘Rox Travel’ channel.
The channel has decided to give allowances to some customer who satisfy these conditions. The conditions are:

The customer should be born on or before july 22 1987

The month of D.O.B month should be of 31 days.

You are given with the D.O.B of all the employees.
Your task is to print the employee index who are having chance to avail special offer.
*/


var userInput = ["4","23 MARCH 1996 23 MARCH 1986 22 JULY 1987 23 MAY 1987"]
userInput[1] = userInput[1].split(" ");
//console.log(userInput[1]);

var dateArray = [];
var j =0;
for(i=0 ; i<userInput[1].length ; i+=3){
    console.log(+userInput[1][i] +" "+ userInput[1][i+1] +" "+ userInput[1][i+2]);
    dateArray.push([+userInput[1][i],
                userInput[1][i+1],
                +userInput[1][i+2]]);
}
var dob = [22, "JULY", 1987];
var month={"JANUARY" : 1,
            "MARCH" : 1,
            "MAY" : 1,
            "JULY": 1,
            "AUGUST": 2,
            "OCTOBER" : 2,
            "DECEMBER" : 2};
console.log(dob);
console.log(month);
var employeeIndex = [];
for( i =0 ; i<dateArray.length ; i++){
    if(dateArray[i][2] > dob[2])
        continue;
    else if(dateArray[i][2] < dob[2] && month[dateArray[i][1]]){
        console.log(dateArray[i]);
        employeeIndex.push(i+1);
    }
    else{
        if(month[dateArray[i][1]] == 1){
            if(month[dateArray[i][1]] == dob[1] && dateArray[i][0] <= dob[0]){
                console.log(dateArray[i]);
                employeeIndex.push(i+1);
            }
            else{
                console.log(dateArray[i]);
                employeeIndex.push(i+1);
            }
        }
    }
}
console.log(employeeIndex.join(" "));
//console.log(date);
//console.log(date.length);
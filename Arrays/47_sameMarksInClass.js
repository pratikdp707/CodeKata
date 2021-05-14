userInput = ["2 10", "1 10 10 20"];

var studentsInClassAndMark = userInput[0].split(" ").map(n => +n);
var otherStudentMarks = userInput[1].split(" ").map(n => +n);
let flag =1;
let sameMarksIndex = [];

for(let i = 0 ; i < otherStudentMarks.length ; i++){
    if(studentsInClassAndMark[1] == otherStudentMarks[i]){
        sameMarksIndex.push(i);
        flag=0;
    }
}
if(flag===1)
    console.log(-1);
else
    console.log(sameMarksIndex.join(" "));
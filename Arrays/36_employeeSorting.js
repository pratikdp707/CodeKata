userInput = ["3",
    "Karthik 23000 rohan 81734 varshini 12343"];

inputArray = userInput[1].split(" ");

employeeSalary = [];
//taking the employee and his salary as array and inserting it into employeeSalary array 
for(let i=0 ; i <inputArray.length ; i+=2){
    dummy = [];
    dummy.push(inputArray[i]);
    dummy.push(inputArray[i+1]);
    employeeSalary.push(dummy);
}

//sorting the employee Salary array based on the salary of the employee
employeeSalary.sort((a,b) => a[1]-b[1]);

for(let i=0 ; i<employeeSalary.length ; i++)
    console.log(employeeSalary[i][0]);

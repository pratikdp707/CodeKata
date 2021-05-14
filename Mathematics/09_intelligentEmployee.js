userInput =["February 2016"];
userInput[0] = userInput[0].split(" ");
userInput[0][1] = +userInput[0][1];

var dayMonthMap ={"January": 31,
                    "February" : 28,
                    "March" : 31,
                    "April" : 30,
                    "May" : 31,
                    "June" : 30,
                    "July" : 31,
                    "August" : 31,
                    "September" : 30,
                    "October" : 31,
                    "November" : 30,
                    "December" : 31};

var dayWorking = {"28" : 9,
                    "29" : 10,
                    "30" : 10,
                    "31" : 11};

if(userInput[0][0] == "February"){
    if(userInput[0][1]%4 == 0 && userInput[0][1]%100 !=0 || userInput[0][1]%400 == 0 ){
        console.log(dayWorking["28"]);
    }
}
else{
    console.log(dayWorking[dayMonthMap[userInput[0][0]]]);
}
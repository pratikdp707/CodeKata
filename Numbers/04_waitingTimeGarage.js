/*
In a garage the service man takes 10 minutes to service one car.
If there are N cars in garage and X is number of minutes after which one person arrives,
Calculate how much time last person has to wait in garage.(Print answer in minutes)
*/

userInput = ["4 5"];

userInput[0] = userInput[0].split(" ");
let carsInGarage = +userInput[0][0];
let minutesAfterPersonArrives = +userInput[0][1];

let lastPersonWaitingTime = (carsInGarage-1) * (10-minutesAfterPersonArrives);
console.log(lastPersonWaitingTime);
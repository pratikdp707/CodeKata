/**
 Problem Statement
 You are given two numbers. Your task is to multiply the two numbers and print the answer.
 */

userInput = ["99999 99998"];

userInput[0] = userInput[0].split(" ");

let numberOne  = +userInput[0][0];
let numberTwo  = +userInput[0][1];

console.log(numberOne*numberTwo);


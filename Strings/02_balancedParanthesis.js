/* 
Problem Statement
you are given a string made up of parenthesis only.
Your task is to check whether parenthesis are balanced or not.If they are balanced print 1 else print 0
*/


userInput = ["{({})}"]
let paranthesisString = userInput[0].split("");

console.log(paranthesisString);

//function to check whether string is balanced or imbalanced
let checkBalanceImbalance = function(myString){
    let checkArray = [];
    let char = '';
    for(i=0 ; i<myString.length ; i++){
        if(myString[i] == '{' || myString[i] == '[' || myString[i] == '(')
            checkArray.push(myString[i]);
        else{
            if(myString[i] == ')'){
                if('(' == checkArray.pop())
                    continue;
                else
                    return 0;
            }
            else if(myString[i] == '}'){
                if('{' == checkArray.pop())
                    continue;
                else
                    return 0;
            }
            else if(myString[i] == ']'){
                if('[' == checkArray.pop())
                    continue;
                else
                    return 0;
            }
        }
    }
    return 1;
}

console.log(checkBalanceImbalance(paranthesisString));

/*

    1
   1 2
  1   3
 1     4
1 2 3 4 5

*/

userInput = ["5"];

let range = +userInput[0];
let s;
let count; 

for(let i=1 ; i <=range ; i++ ){
    s = "";
    //loop to print the spaces
    for(let j=range ; j>i ; j--){
        s += " ";
    }
    count = 1;
    //loop to print the numbers
    for(let k=1; k<=i ;k++){
        //condition for last element
        if(k==i)
            s += count;
        //condition for first element
        else if (k==1)
            s += count+" ";
        //condition to check whether middle element should be blank aur a number
        else
            if(i==range)
                s += count +" ";
            else
                s += "  ";
        count++;
    }
    console.log(s);
}



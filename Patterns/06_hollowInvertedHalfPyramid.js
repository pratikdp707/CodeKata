/*
12345
1  4
1 3
12
1
*/

userInput = ["8"];

let range = +userInput[0];

for( let i=range;  i>=1 ; i--){
    let s ="";
    for(j=1; j<=i ; j++){
        if(i==1 || i==range)
            s += j;
        else{
            if(j==1 || j == i)
                s+=j;
            else
                s+=" ";
        }
    }
    console.log(s);
}
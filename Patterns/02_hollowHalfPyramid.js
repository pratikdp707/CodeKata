/*
1
12
1 3
1  4
12345
*/
userInput = ["8"];

let range = +userInput[0];

for( let i=1;  i<=range ; i++){
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
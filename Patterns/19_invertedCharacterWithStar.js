/*

bbbb*bbbb
bbb***bbb
bb*****bb
b*******b
*********

*/

userInput  = ["5"];

let range = userInput[0];
let s;

for(let i=1 ; i<=range ; i++){
    s="";
    //loop to append b
    for(let j=range ;j>i ;j--){
        s+="b";
    }

    //loop to append *
    for(let k=1; k<=i ; k++){
        if(k==i)
            s+="*";
        else
            s+="**"
    }
    //loop to append b
    for(let l=range ;l>i ;l--){
        s+="b";
    }

    console.log(s);
}
let n = 5;
let finalArray = [n];
let numberArray = [1,2,3,4,5]
// for (i=0;i<n;i++){
// //      numberArray[i] = +numberArray[i];
//     finalArray[i] = -1;
// }
let count =0 ;
for (i=0;i<n;i++){
    for(j=i+1;j<n;j++){
        if(numberArray[i]>numberArray[j]){
            finalArray[count] = numberArray[j];
            count++;
            break;
        }
    }
}
for(i =n-1;i>=count;i--){
    finalArray[i] = -1;
}
console.log(finalArray.join(" "));

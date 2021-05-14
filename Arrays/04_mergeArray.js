let arrayOne = [23, 15, 16];
let arrayTwo = [357, 65, 10];

arrayOne.sort((a,b)=>a-b);
arrayTwo.sort((a,b)=>a-b);
console.log(arrayTwo);

let mergeArray = [];
for(i = 0; i < arrayOne.length ; i++){
    mergeArray.push(arrayOne[i]);
}
for(i = arrayTwo.length-1 ; i>=0 ;i--){
    mergeArray.push(arrayTwo[i]);
}

console.log(mergeArray.join(" "));


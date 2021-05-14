let n = 7;
let numArray = [1,1,13,13,1,3,3];
numArray.sort();
let element =[];
let frequency = [];
for (i=0; i<n ; i++){
    if(!element.includes(numArray[i])){
        element.push(numArray[i]);
    }
}

for(i =0;i<element.length ; i++){
    frequency[i] =0;
    for(j =0;j<n;j++){
        if(element[i] == numArray[j]){
            frequency[i]++;
        }
    }
}

console.log(element);
console.log(frequency);

for( i=0;i<frequency.length;i++){
    for(j=0;j<frequency.length;j++){
        if(frequency[j] > frequency [j+1]){
            let temp1 = frequency[j];
            frequency[j] = frequency[j+1];
            frequency[j+1] = temp1;
            temp1 = element[j];
            element[j] = element[j+1];
            element[j+1] = temp1;
        }
        else if(frequency[j] = frequency [j+1] && element[j]>element[j+1]){
            let temp1 = frequency[j];
            frequency[j] = frequency[j+1];
            frequency[j+1] = temp1;
            temp1 = element[j];
            element[j] = element[j+1];
            element[j+1] = temp1;
        }
    }
}

console.log(element.join(" "));
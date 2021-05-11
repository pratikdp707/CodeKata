/*
*********

b*******b

bb*****bb

bbb***bbb

bbbb*bbbb
*/
userInput = ["5"];
let range = +userInput[0];

let row = "";

for (let i = 0; i < range; i++) {
    row = "";
    for (let j = 0; j < range * 2 - 1; j++) {
        if (j % (range * 2 - 1) > i - 1 && j % (range * 2 - 1) < range * 2 - i - 1)
            row += "*"
        else
            row += "b"
    }
    console.log(row);
}
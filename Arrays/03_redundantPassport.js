let n = 5;
let red_passport = ["A23", "B56", "B56", "C79", "D16"];

let dis_passport = [];
for (i=0; i<n ; i++){
    if(!dis_passport.includes(red_passport[i])){
        dis_passport.push(red_passport[i]);
    }
}
console.log(dis_passport.join(" "));
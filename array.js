const number = [23, 343, 23, 54, 654, 12, 18];

// array reverse with for loop and while loop
// const rev = number.reverse();
// console.log(rev);

// const rev2 = [];
// for(const num of number){
//     rev2.unshift(num);
// }
// console.log(rev2);

// for loop and while loop
// let x = [];
for(let i = number.length -1; i >= 0; i--){
    // console.log(number[i]);
}

for(const num of number){
    // console.log(num);
}
for(let i = 0; i < number.length; i++){
    // console.log(number[i]);
}
let i = 0;
while(i < number.length){
    // console.log(number[i]);
    i++;
}

const personName = ["kashem", "lashem", "pashem", "kasen", "laden"];

const per_rev = personName.reverse();
// console.log(per_rev);

const rev = [];
for(const rev_rev of personName){
   rev.unshift(rev_rev);
   console.log(rev);
}
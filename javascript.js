// declear variable need 5 items in js *

// var personName = "SAJEEB";

// using operator in js
// +, -, *, /, %,
// isNaN --> 
// var num = 23;
// var num2 = "shdbfsbn";
//it's optional var resul = num + num2;
// console.log(num + parseInt(num2));
// its give u an isNaN becouse num2 is string not a number
  

// logical operator 
// 1. logical and &&
// 2. logical or ||
// 3, logical not !

// javascript a 3 data type thake
// 1. "string"
// 2. number
// 3.boolean

// compersion operator 
// 1. getar than > 
// 2. less than <
// 3. getar than or equal >=
// 4. less than or equal <=
// 5. ==
// 6. ===
// 7. !==

// class 2 introduction to conditional
//  if, else if, else

// var num = 10;
// var num2 = 40;
// console.log(num < num2);

// var num = 20;
// var num2 = 40;
// console.log(num >= num2);

// var age = 18;
// if (age >= 20){
//     console.log("than visit the website")
// }
// else if(age > 20){
//     console.log("You are adult")
// }
// else {
//     console.log("you are a kid");
// }

// logiacl operator use 
// var housePrice = 100000;
// var houseColor = "Borwn and white";
// var gerage = ture;

// if (housePrice < 200000 && houseColor > "Brown and white"){
//     console.log("i will buy this house")
// } else{
    
// }

// multi lavel if else condition

// let childAge = 15;
// let adultAge = 29;
// let oldMan = 40;
// let foodPrice = 1000;

// if (childAge >= 18){
//     console.log("you can eat for free");
// }else if(adultAge <= 20 ){
//     const discount = foodPrice * 5 / 100;
//     const payamount = foodPrice - discount;
//     console.log(payamount);
// }
// else if(oldMan >= 50){
//     const discount = foodPrice * 50 / 100;
//     const payamount = foodPrice - discount;
//     console.log(payamount);
// } else{
//     console.log("you have to pay full amount" + " " + foodPrice);
// }

// grating cheaking

// let personNumber = Number(prompt("enter your mask : "));

// if(personNumber <= 0 || personNumber > 100){
//     document.write("not a valid number")
// }
// else if(personNumber >= 80 && personNumber <= 100){
//     document.write("you have" + " A+")
// }
// else if(personNumber >= 70 && personNumber <= 79){
//     document.write("you have" + " A")
// }
// else if(personNumber >= 60 && personNumber <= 69){
//     document.write("you have" + " A-")
// }
// else if(personNumber >= 50 && personNumber <= 59){
//     document.write("you have" + " B")
// }
// else if(personNumber >= 40 && personNumber <= 49){
//     document.write("you have" + " C")
// }
// else if(personNumber >= 35 && personNumber <= 39){
//     document.write("you have" + " D")
// }
// else if(personNumber >= 30 && personNumber <= 34){
//     document.write("you have" + " E")
// }
// else{
//     document.write("fail")
// }

// advanced if else shorthand ternary operator
// dubole logical not !! jante hobe
// ternary operator o jante hobe

// Declare an array 

// let furitsName = ["Banana", "Mango", "Orange", "pynaple"];

// console.log(furitsName.length);
// console.log(furitsName.indexOf[2]);
// console.log(furitsName);
// console.log(furitsName[3]);
// furitsName[2] = "jambura";
// console.log(furitsName)


// let destinations = ["cox's bazar", "bandorbon", "shylet", "kaptai"];

// console.log(destinations);
// destinations.push("kolkata");
// console.log(destinations);
// destinations.unshift("delhi", "mumbai");
// console.log(destinations);
// destinations.pop();
// console.log(destinations);

// let book = ["bangla", "english", "math", "grammer"];
// console.log(book.includes("math"));
// console.log(book.includes("javascript"));
// if(book.includes("english")){
//     console.log("i have to learn english")
// } else{
//     console.log("i think it's not much important to learn programming")
// }

// const items = [1, 3, 4];
// let num2 = 34;
// console.log(Array.isArray(num2));
// console.log(Array.isArray(items));
// if(Array.isArray(items)){
//     console.log('this is array')
// } else{
//     console.log("this is not a array")
// }

let numArray = [1, 2, 3, 4, 5,];
let num2Array = [6, 7, 8, 9, 10];
let result = numArray.concat(num2Array);
console.log(result);

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

// let numArray = [1, 2, 3, 4, 5,];
// let num2Array = [6, 7, 8, 9, 10];
// let result = numArray.concat(num2Array);
// console.log(result);



// ----------------------------------------------------------------------------------
// fundamental concept for loop 

// 1. for loop
// 2. for of loop
// 3. for in loop

// for of loop
// const numbers = [1, 2, 34, 23, 5, 76, 45];
// for(const num of numbers){
//     console.log(num);
// }

// for loop
// for(let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
// }


// for loop
// const fruitBucket = ["banana", "orange", "mango", "pinepple"];
// for(let i = 0; i < fruitBucket.length; i++){
//     console.log(fruitBucket[i]);
// }

// for in loop
//   const personDetails = {fname: "jhone", lname: "deo", age: 45, htown: "usa"};

//   for(let person in personDetails){
//       console.log(person);
//   }

// WHILE LOOP 

// print 1 to 100 numbers
// let x = 1;

// while(x <= 100){
//     console.log(x);
//     x++;
// }

// print koro 1 theke 100 ar moddhe even nunmbers gula k.
// let numbers = 1;
// let evenNumbers = 0;
// while(numbers <= 100){
//    console.log(numbers);
//    evenNumbers = evenNumbers + numbers;
//    console.log("1 to 100 even numbers : "+evenNumbers)
//    numbers++;
// }

// print koro even number 1 to 50
// let i = 1;
// while(i <= 50 ){
//     console.log(i);
//    if(i % 2 === 0){
//     console.log("even number" , i);
//    }
//     i++;
// }

// print koro even number 1 to 50
// let i = 1;
// while(i <= 50 ){
//     console.log(i);
//    if(i % 2 === 1){
//     console.log("odd number" , i);
//    }
//     i++;
// }

// let i = 1;
// while(i <= 50 ){
//     console.log(i);
//    if(i % 2 !== 1){
//     console.log("even number" , i);
//    }
//     i++;
// }
// let y = 1;
// while(y <= 50 ){
//     console.log(y);
//    if(y % 2 !== 0){
//     console.log("odd number" , y);
//    }
//     y++;
// }


// I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

// let hours = 1;
// while(hours <= 60){
//     console.log("I will invest at least 6 hrs every single day for next 60 days")
//     hours++;
// }


// print even and odd numbers 

// for(let i = 1; i <= 20; i++){
//     if(i % 2 === 0){
//         console.log("even" , i);
//     }
// }
// for(let i = 0; i <= 30; i++){
//     if(i % 2 === 1){
//         console.log("odd" ,  i);
//     }
// }

// let num1 = 1;
// while(num1 <= 50){
//     if(num1 % 2 !==1){
//         console.log("this is a even number", num1);
//     }
//     num1++;
// }

// let num2 = 1;
// while(num2 <= 30){
//     if(num2 % 2 !== 0){
//         console.log("this is odd number", num2);
//     }
//     num2++;
// }

// let multiNumbers = 1;
// while(multiNumbers <= 20){
//     if(multiNumbers % 5 === 0){
//         console.log(multiNumbers);
//     }
//     multiNumbers++;
// }

// for(let numbers = 0; numbers <= 50; numbers++){
//     if(numbers % 7 === 0){
//         console.log(numbers);
//     }
// }

// let a = 1;
// while(a <= 60){
//     if(a % 8 ===1){
//      console.log("odd number", a)
//     }
//     a++;
// }

// for(let x = 0; x <= 40; x++){
//     if(x % 6 === 1){
//         console.log("this is odd number", x);
//     }
// }


// let N = 1;
// while(N <= 100){
//     if(N % 8 === 0 || N % 5 === 0 || N % 10 === 1){
//         console.log(N);
//     }
//     N++;
// }

// for(let i = 1; i <= 80; i++){
//     if(i % 5 === 0){
//         console.log( i);
//     }
// }

// let x = 0;
// for(let i = 1; i <= 50; i++){
//     if(i % 3 === 0){
//         console.log(i);
//         x = x + i;
//         console.log("form 1 to 50 divisible by 3 and also given a sum of numbers",x);
//     }
// }
// console.log("total number is ", x);


// Find all the odd numbers from 61 to 100.

// let num = 61;
// while(num <= 100){
//     if(num % 2 === 1){
//         console.log("odd numbers" , num);
//     }
//     num++;
// }

// for(let num = 61; num <= 100; num++){
//     if(num % 2 !==0){
//         console.log("Odd num", num);
//     }
// }
// // Find all the odd numbers from 61 to 100.
// let evenNum = 78;
// while(evenNum <= 100){
//     if(evenNum % 2 === 0){
//         console.log("even numbers" , evenNum);
//     }
//     evenNum++;
// } 

// for(let evenNum = 78; evenNum <= 100; evenNum++){
//     if(evenNum % 2 !==1){
//         console.log("even numbers", evenNum);
//     }
// }

// Display sum of all the odd numbers from 81 to 131.

// let num2 = 81;
// let sumNum2 = 0;
// while(num2 <= 131){
//     if(num2 % 2 === 1){
//         console.log("odd numbers ", num2)
//         sumNum2 = sumNum2 + num2;
//         console.log("total", sumNum2);
//     }
//     num2++;
// }
// console.log("total sum numbers", sumNum2);

// Display sum of all the even numbers from 206 to 311.
// let evenNum = 206;
// let evenSum = 0;
// while(evenNum <= 311){
//     if(evenNum % 2 === 0){
//         console.log("even numbr", evenNum);
//         evenSum = evenNum + evenSum;
//         console.log("even sum num", evenSum);
//     }
//     evenNum++;
// }
// console.log("evenSum total Numbers", evenSum);

// let evenTotal = 0;
// for(let evenNum = 206; evenNum <= 311; evenNum++){
//     if(evenNum % 2 === 0){
//         console.log("even numbers", evenNum);
//         evenTotal = evenTotal + evenNum;
//         console.log("evensum ", evenTotal);
//     }
// }
// console.log("total even Number sum", evenTotal);

// Implement a countdown timer that counts down from 21 to 15.

// let countdown = 21;
// while(countdown >= 15){
//     console.log(countdown);
//     countdown--;
// }

// Write a loop 1 to 200. Use break to exit the loop once you find 100.

// let fNumber = 1;
// while(fNumber <= 300){
//     console.log(fNumber);
//     if(fNumber >= 100){
//         break;
//     }
//     fNumber++;
// }
// console.log("break" ,fNumber);

// for(let fNumber = 1; fNumber <= 300; fNumber++){
//     console.log("break",fNumber);
//     if(fNumber >= 100){
//         break;
//     }
//     fNumber++;
// }


// let initNum = 1;
// while(initNum <= 200){
//     console.log(initNum);
//     if(initNum >= 70){
//         break;
//     }
//     initNum++;
// }

// Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
// let x = 1;
// let sum = 0;
// while(true){
//     sum = sum + x;
//     if(sum >= 100){
//         break;
//     }
//     x++;
// }
// console.log("sum numbers" ,sum);

// let x = 1;
// let initNum = 0;
// while(true){
//     initNum = initNum + x;
//    if(initNum >= 100){
//     break;
//    }
//    initNum++;
// }
// console.log(initNum);

// let i = 1;
// let sum2 = 0;
// while(i <= 100){
//     sum2 = sum2 * i;
//     if(sum2 >= 16){
//         break
//     }
//     sum2++;
// }
// console.log(sum2);
// let str = "Mississippi";
// console.log(str.indexOf("i", 3));

// const colors = {
//     red: "#ff0000",
//     green: "#00ff00",
//     blue: "#0000ff",
//     "golden rod": '#daa520'
// };
// console.log(colors["golden rod"]);

// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020,
//     "pessenger capacity": 5
// };
// console.log(car["pessenger capacity"]);

// const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan Tapan",
//         marks: 30
//     }
// };
// let mark = student.physics.marks;
// console.log(mark);

// let student = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };
// for(let prop in student){
//     console.log(prop.length);
// }
// let students = Object.keys(student);
// console.log(students);
// console.log(student);

// let myObject = {
//     name: 'John Doe',
//     age: 25,
//     city: 'Example City',
//     isStudent: true
// };
// for(let x in myObject){
//     console.log("keys :" + x ,typeof x);
// }

// const country = "bangladesh";
// console.log(country.toUpperCase());
// const divishion = "cumilla";
// const thana = new String("nangolkot");
// console.log(thana)
// console.log(typeof thana);

// const numbers = [12, 34, 213, 54, 23];
// console.log(numbers);
// numbers[3] = 400;
// console.log(numbers);

// string is immutable --> not changeable
// number is immutable --> it's can be changeable


// let favPlace = "kolkata ";
// let favPlace2 = " Kolkata";

// if(favPlace.toLowerCase().trim() === favPlace2.toLowerCase().trim()){
//     console.log("in sha Allha one day i will go in kolkata to visit")
// } else{
//     console.log("bangladesh a gurbo");
// }

// reverse a string in three diffrent ways


// let sentence = "i am learning web development";

// const reverse2 = sentence.split(" ").reverse().join(" ")
// console.log(reverse2);


// using for loop to reverse sentence

// let rev = '';
// for(let i = 0; i < sentence.length; i++){
//     const letter = sentence[i];
//     rev = letter + rev;
// }
// console.log(rev);


// using for of loop to reverse sentence


// let reverse = '';
// for(const letter of sentence){
//     reverse = letter + reverse;
// }
// console.log(reverse);

// let reverse = '';
// for(const letter of sentence){
//     // console.log(letter);
//     reverse = letter + reverse;
// }
// console.log(reverse);

// using method() to reverse sentence 

// let sentence2 = "i love kolkata one day I want to go in kolkata";

// const rev = sentence2.split(' ').reverse().join(" ");
// console.log(rev);

// let sentence = "bangladesh";

// const rev = sentence.split('').reverse().join(" ")
// console.log(rev);

// how to get and set properties and value in object

// 1. dot symbol deya object ar property er value access kora
// const personName = {
//     fname: "mafia",
//     lname: "khan",
//     age: 34,
//     htown: "canada"
// } 
// console.log(personName);
// console.log(personName.htown);
// console.log(personName.fname);

// change value in object. 
// personName[0] = "shufia";
// console.log(personName[0]);

// 2. third brket with dubble kotestion [""] get and set value

// const bazerBucket = {
//     apple: "300-taka",
//     orange: 200,
//     kagor: true,
//     oil: "oil nesi",
//     "have rice": "yes i alredy buy rice",
//     "wnat to eat": ["biriyani", "polaw", "rost", "cingri"]
// };

// const fruts = 'kagor';
// bazerBucket[fruts] = false;
// console.log(bazerBucket["kagor"]);
// console.log(bazerBucket['kagor']);

// bazerBucket['apple']  = "watermelon"
// console.log(bazerBucket['apple']);

// bazerBucket["have rice"] = "no rice"
// console.log(bazerBucket["have rice"]);

// bazerBucket["wnat to eat"] = "muri kha";
// console.log(bazerBucket["wnat to eat"]);

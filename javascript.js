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
// number is mutable --> it's can be changeable

// let favPlace = "kolkata ";
// let favPlace2 = " Kolkata";

// if(favPlace.toLowerCase().trim() === favPlace2.toLowerCase().trim()){
//     console.log("in sha Allha one day i will go in kolkata to visit")
// } else{
//     console.log("bangladesh a gurbo");
// }

// 1. reverse a string in three diffrent ways

// let sentence = "i am learning web development";

// const reverse2 = sentence.split(" ").reverse().join(" ")
// console.log(reverse2);


// 2. using for loop to reverse sentence

// let rev = '';
// for(let i = 0; i < sentence.length; i++){
//     const letter = sentence[i];
//     rev = letter + rev;
// }
// console.log(rev);


// 3. using for of loop to reverse sentence

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

// keys, value, nasted object and delete

// 1. keys--->
// const computer = {
//     brand: "hp",
//     price: 20000,
//     processor: "intel",
//     hdd: "512gb",
//     monitor: "lenovo"
// }
// console.log(computer);
// const com = Object.keys(computer);
// console.log(com);

// 2. value --->

// const computer = {
//     brand: "hp",
//     price: 20000,
//     processor: "intel",
//     hdd: "512gb",
//     monitor: "lenovo"
// }

// const value = Object.values(computer);
// console.log(value);


// 3. Nasted way to get properties and value also change value

// const car = {
//     model: "Bugddi",
//     price: 3.5000000,
//     color: "black",
//     speed: 350,
//     tayer: 4,
//     experience: "very good",
//     details:{
//         milage: "per 1min",
//         light: "white",
//         engine: 323234,
//         cars: {
//            carsName: ["Bmw", "Bugaddi", "lambo", "lenovo", "toyota", "muz-tang"],
//         }
//     }
// }
// delete nasted properties in Object
// delete car.details.cars;
// delete car.details

// console.log(car)
// const carLight = car["details"]["light"] = ["orange", "blue"];
// console.log(carLight);


// console.log(car["details"].engine);
// const bike = car.details.cars.carsName[0] = "Bmw Bike";
// console.log(bike);
// console.log(car.details.cars.carsName);

// console.log(car);
// const carBugaddi = Object.keys(car);
// console.log(carBugaddi);

// const carValue = Object.values(car);
// console.log(carValue);

// const car = {
//         model: "Bugddi",
//         price: 3.5000000,
//         color: "black",
//         speed: 350,
//         tayer: 4,
// }

// console.log(carS);

// const carS = Object.keys(car);
// for(const carDetails of carS){
//     console.log(carDetails, car[carDetails]);
// }

// const carValue = Object.values(car);
// for(const car of carValue){
//     console.log(car);
// }

// console.log(car);
// for(const cars in car){
//     console.log("keys",cars,"|", "value" ,car[cars]);
// }

// const myObject = {
//     name: 'John Doe',
//     age: 25,
//     city: 'Example City',
//     isStudent: true
// }
// const objectValue = Object.keys(myObject);

// for(const person in myObject){
//     console.log( "key:" ,person, " | " , "type:" ,  myObject[person]);
// }

// const fruit = ["golap", "joba", "beli"];

// for(let i = fruit.length-1; i >= 0; i--){
//     console.log(fruit[i]);
// }

// const rev = fruit.reverse();
// console.log(rev);
// const reverse = [];
// for(const fruits of fruit){
//     reverse.unshift(fruits);
// }
// console.log(reverse);

// const numbers = [23, 34, 23, 123, 5644, 4323];
// console.log(numbers);
// const rev2 = numbers.reverse();
// console.log(rev2);

// let rev3 = [];
// for(const rev of numbers){
//     rev3.unshift(rev);
// }
// console.log(rev3);

// for(let i = numbers.length -1; i >= 0; i--){
//     const num = numbers[i];
//     console.log(num);
// }

// const sting = "Bangladesh";
// console.log(sting);

// const x = [];
// for(const i of sting){
//     x.unshift(i);
// }
// console.log(x);

// for(let i = sting.length -1; i >= 0; i--){
//     const srt = sting[i];
//     console.log(srt);
// }

// const personName = ["bashem", "dashem", "aashem", "easen", "caden"];

// sort an array with decending and acending order

// const asc = personName.sort();
// console.log(asc);

// const perNam = personName[2] = "anis";
// console.log(perNam);

// console.log("change value " +personName);

// const rev = [];
// for(const rev_rev of personName){
//     rev.unshift(rev_rev);
// }
// console.log(rev);

// for(let i = personName.length -1; i >= 0; i--){
    // console.log(personName[i]);
// }

// const number = [12, 34, 65, 23, 89, 56, 1, 3, 6];
// const num = number.sort(function(a,b) {return a - b});
// console.log(num);

// const number2 = [4, 7, 5, 9, 1, 3, 10];
// const num2 = number2.sort();
// console.log(num2);


// ARRAY--LOOPING TASKS

// task 1 -->
// const color = ['red', 'blue', 'green', 'yellow', 'orange'];

// const colorRev = [];
// for(const rev of color){
//     colorRev.unshift(rev);
// }
// console.log(colorRev);

// task 2 --->

// const inputNumber = [12, 98, 5, 41, 23, 78, 46];

// for(const input of inputNumber){
//     if(input % 2 === 0){
//         // console.log( "even numbers : " + input);
//     }
// }

// task 3 ---->

// const names = ["tom", "tim", "tin", "tik", "tok"];

// const nam = names.join(" ");
// console.log(nam);

// const sta = statement.split();
// console.log(sta);

// console.log(typeof statement);

// const statement = 'I am a hard working person'

// let sentence3 = "";
// for(const letter of statement){
//     sentence3= letter + sentence3;
    // console.log(sentence3);
// }

// let sentence4 = "";
// for(let i = 0; i > statement.length; i--){
    // const letter = statement[i];
    // console.log(letter);
    // console.log(statement[i]);
// }

// const sentence2 = statement.split(" ").reverse().join(" ");
// console.log(sentence2);


const sentences = "hi i am a junior web developer";

// let rev = "";
// for(let i = 0; i < sentences.length; i++){
//    const letter = sentences[i];
//    rev = letter + rev;
// }
// console.log(rev);

// let rev = '';
// for(let i = 0; i < sentences.length; i++){
//     const letter = sentences[i];
//     rev = letter + rev;
// }
// console.log(rev);

// let sen = "";
// for(const letter of sentences){
//    sen = letter + sen;
//    console.log(sen);
// }

// const letters = sentences.split(" ").reverse().join(" ");
// console.log(letters);

// -------------------------------FUNCTION CLASS--------------------------------
//  1........ WHAT ARE FUNCTION AND FUNCTION SYNTAX

// DECLEAR FUNCTION 

// function money(taka1, taka2, taka3){
//     const totalMoney = taka1 + taka2 + taka3;
//     console.log(totalMoney);
// }
// money(200, 400, 199);

// function myHealth(){
//     console.log("mon vhalo ny");
//     console.log("sorir betha");
// }
// myHealth();

// RETURN SQUARE NUMBER 

// function square(number){
//     const borgo = number * number;
//     console.log( "square number : " + borgo);
// }
// square(4);
// console.log("-------------------");
// square(8); 
// console.log("-------------------");
// square(19);
// console.log("-------------------");
// square(20);
// console.log("-------------------");

// function diffrenece(fatherAge, myAge){
//     const difff = fatherAge - myAge;
//     console.log(fatherAge , myAge , "  diffrence " , difff);
// }
// const fatherAge = 54;
// const myAge = 21;
// diffrenece(fatherAge, myAge);

// function toureFunction(place, year){
//     console.log(place,year)
// }
// const place = "kolkata";
// const Year = 2027;
// toureFunction("my fav place is " + place + ", in sha Allha one day i will go, " + place + " in " + Year);

// console.log("--------------------");

// const place2 = "canada";
// const year2 = 2028;
// toureFunction("my fav place is " + place2 + ", in sha Allha one day i will go, " + place2 + " in " + year2);

// sum numbers
// function addtionNumbers(num1, num2){
//      const total = num1 + num2;
//      return total;
// }
// const result = addtionNumbers(10, 39);
// console.log("sum number : " + result);

// sub numbers
// function subNumbers(num1 , num2){
//    const total = num1 - num2;
//    return total;
// }
// const num1 = 49;
// const num2 = 23;
// const result2 = subNumbers(num1, num2);
// console.log("sub numbers : " + result2); 

// square numbers 

// function squareNumbers(number){
//     const total =  number * number;
//     return total;
// }

// const result3 = squareNumbers(50);
// console.log( "square number : " + result3); 

// function isEven(number){
//     if(number % 2 === 0){
//         return true;
//     } else {
//         return false;
//     }
// }

// const result = isEven(5);
// console.log(result);

// const result4 = isEven(10);
// console.log(result4);
// console.log(isEven(5));
// console.log(isEven(8));

// function isOddNumbers(number){
//     if(number % 2 !==0 ){
//         return true;
//     }
//     return false;
// }
// console.log(isOddNumbers(5));
// console.log(isOddNumbers(20));

// const res = isOddNumbers(5);
// console.log("odd number : " + res);

// const res2 = isOddNumbers(10);
// console.log("odd number : " + res2);

// function srtSize(str){
//     const stringSize = str.length;
//     console.log(str ,stringSize);
//     if(stringSize % 2 === 0){
//         console.log("even size");
//     } else{
//         console.log("odd size");
//     }
// }

// srtSize("bangladesh");
// srtSize("cumilla");

// function checkString(str){
//    const stringSize = str.length;
//    console.log(str, stringSize);
//    if(stringSize % 2 === 0){
//     console.log("even size");
//     return true;
//    } else{
//     console.log("odd size");
//     return false;
//    }
// }

// checkString("kolkata");
// checkString("canada");


// function myFunction(num, dubbleNum){
//     if(dubbleNum === false){
//         const result = num + 2;
//         return result;
//     }  else {
//         const result2 = num * 3;
//         return result2;
//     }
// }
// console.log(myFunction(5, true));
// console.log(myFunction(10, false));


// function myNumbers(num, num2){
//     if(num2 === true){
//         const result = num / 5;
//         return result;
//     }
//     else {
//         const result2 = num * 3;
//         return result2;
//     }
// }

// console.log(myNumbers(8, true));
// console.log(myNumbers(8, false));

// function cheakFunction(num, cheak){
//     if(cheak === true){
//         const number = num * 10;
//         return number;
//     } else {
//         const number2 = num / 2;
//         return number2;
//     }
// }

// const num1 = 8;
// console.log(cheakFunction(num1, true));

// const num2 = 4;
// console.log(cheakFunction(num2, false));

// FUNCTION IN ARRAY

// function myArray(number){
//    const array = number.length;
//    return array;
// }

// const littleArray = [1, 34, 12, 54, 23];
// console.log(myArray(littleArray));

// function myObject(person){
//     const object = person.fname;
//     const object2 = person.age;
//     // return object, object2;
//     console.log(object, object2);
// }

// const myObject2 = {
//     fname: "lalu",
//     lname: "kalu",
//     age: 23
// }
// myObject(myObject2);


// objective : write a function to given me the sum of all numbers in an array

// function sumNumbers(numbrs){
//     let sum = 0;
//     for(const num of numbrs){
//         sum = sum + num;
//         console.log(sum);
//     }
//     return sum;
// }
// const sumArray = [2, 4, 12, 85, 99];
// const sum = sumNumbers(sumArray);
// console.log( "sum of numbers : " ,sum);

// function sumOfNumbers(numbers){
//     let x = 0;
//     for(const num of numbers){
//         x = x + num;
//        console.log(x);
//     }
//     return x;
// }
// const sumArray = [23, 43, 12, 645];
// const sum = sumOfNumbers(sumArray);
// console.log( "sum of numbers " ,sum);

// function mySumNumbers(number){
//     let sum = 0;
//     for(const x of number){
//         sum = sum + x;
//         console.log(sum);
//     }
//     return sum;
// }
// const sumArray = [200, 400, 2, 434, 100];
// const sum = mySumNumbers(sumArray);
// console.log( "sum of the array " ,sum);


// function myFunction(numbers){
//     let i = 0;
//     for(const num of numbers){
//         console.log(num);
//         i = i + num;
//         // console.log(i);
//     }
//     return i;
// }
// const sumArray = [2, 4, 6, 8, 9, 5];
// const sum = myFunction(sumArray);
// console.log( "sum of numbers " ,sum);


// RETURN ALL THE EVEN NUMBERS OF AN ARRAY

// function sumOfEvenNumbers(numbers){
//     // console.log(numbers);
//     let newArray = [];
//     let sum = 0;
//     for(const num of numbers){
//         if(num % 2=== 0){
//             newArray.push(num);
//             sum = sum + num;
//         }
//     }
//     console.log( "sum of even numbers :" ,sum);
//     return newArray;
// }
// const sumArray = [2, 43, 1, 64, 99, 34, 6];
// const sum = sumOfEvenNumbers(sumArray);
// console.log( "sum of even numbers :" ,sum);

function arrayOfOddNumbers(numbers){
    let i = [];
    for(const num of numbers){
        if(num % 2 === 1){
            // i = i + num;
            i.unshift(num);
            console.log(num);
        }
    }
    return i;
}
const numArray = [2, 3, 1, 43, 6, 34, 7];
const isOddNumbers = arrayOfOddNumbers(numArray);
console.log( "array sum in odd numbers" ,isOddNumbers);


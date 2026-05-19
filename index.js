// console.log('hallo guten tag');
// // window.alert('tchau');
// //-----------------------------
// document.getElementById('mytitle').textContent = "hallo from js";
// document.getElementById('p').textContent = "hallo from js";
// //-----------------------------//---------------------

// //vareibles
// //numbers//
// let age1 = 21;
// let year = 2026;
// let price = 10.99;
// //-----------------------------
// console.log(`your age is ${age1}`)
// console.log(`this year is: ${year}`)
// console.log(`the price is: ${price}`)
// //-----------------------------
// console.log(typeof age1)
// console.log(typeof year)
// console.log(typeof price)
// //-----------------------------//---------------------
// //strings//
// let FristName = "Ahmed";
// let Email = "germanymido82@gmail.com";
// let Country = "egypt";
// //-----------------------------
// console.log(`my frist name is ${FristName}`);
// console.log(`my email is: ${Email}`);
// console.log(`my country is: ${Country}`);
// //-----------------------------
// console.log(typeof FristName)
// console.log(typeof Email)
// console.log(typeof Country)
// //-----------------------------//---------------------
// //booleans//
// let isBoy = true;
// let online = false;
// //-----------------------------
// console.log(`Are u aboy${isBoy}`);
// console.log(`Are u online${online}`);
// //-----------------------------
// console.log(typeof isBoy)
// console.log(typeof online)
// //-----------------------------//---------------------

// //variable on site
// let userName = "sara";
// let password = "Ahmed&Ahmed200";
// let userEmail = "germanymido82@gmail.com";
// //-----------------------------
// document.getElementById("user").textContent = `username is: ${userName}`;
// document.getElementById("password").textContent = password;
// document.getElementById("email").textContent = userEmail;
// //-----------------------------//---------------------

// // Arithmetic operators
// //operators (+,-,*,/,%,**,++)
// let students = 30;
// let extraStudents;
// //-----------------------------
// students += 1  //students = students+1;
// students -= 1  //students = students-1;
// students *= 2  //students = students*2;
// students /= 2  //students = students/2;
// students **= 2  //students = students**2;
// students %= 2  //students = students%2;
// extraStudents = students % 2;  //students = students%2;
// //-----------------------------//---------------------
// //increment and decrement
// //++ and --
// students++;  //students = students+1;
// students--;  //students = students-1;
// //-----------------------------
// console.log(students);
// console.log(`there are ${extraStudents} students extra`);
// //-----------------------------//---------------------
// //operator precedence
// //1 ()
// //2 **
// //3 */%
// //4 +-
// let result = 1 + 2 * 3 - 4 / 2 ** 2;
// //-----------------------------
// console.log(`this result is : ${result}`);
// //-----------------------------//---------------------

// //accept input from user
// // esay way == window.promt()
// let phoneNumber;
// // phoneNumber = window.prompt("set ur phone num here");
// console.log(`your phone number is : ${phoneNumber}`);
// //-----------------------------
// // pro way
// let myRam;
// document.getElementById("btn_checker").onclick = function () {
//     myRam = document.getElementById("rem_checker").value;
//     console.log(myRam);
// }
// //-----------------------------//---------------------

// // Type conversion 💱
// // convert typeof :
// // number
// // string
// // boolean
// let numOfHouse = window.prompt("enter num of house")  // string output
// numOfHouse = Number(numOfHouse);
// numOfHouse += 1;
// console.log(typeof numOfHouse, numOfHouse)
// //-----------------------------
// let x = "21";
// let y = "21";
// let z = "21";
// x = Number(x); //nan
// y = String(y); //21
// z = Boolean(z); //true
// //-----------------------------//---------------------

// // Constants 🚫
// const PI = 3.14159;  //can't change
// let circumference;
// //-----------------------------
// // ez way 2 calc circumference of circle
// let radius = window.prompt("enter radius");
// radius = Number(radius);
// circumference = 2 * PI * radius;
// console.log(`the circumference of the circle is ${circumference}`);
// //-----------------------------
// // pro way 2 calc circumference of circle
// document.getElementById("btn_circumference").onclick = function () {
//     radius = document.getElementById("radius_input").value;
//     radius = Number(radius);
//     circumference = 2 * PI * radius;
//     document.getElementById("result_calc").textContent = circumference;
// }
// //-----------------------------//---------------------

// //math object
// // Math.Properties (Constants)
// Math.PI;
// console.log(Math.PI);
// //-----------------------------
// Math.E
// console.log(Math.E);
// //-----------------------------
// // Math Methods
// // Math.round(x)	Returns x rounded to its nearest integer
// let Round = 2.88;
// let store;
// store = Math.round(Round);
// console.log(store); //3  to nearst num
// //-----------------------------
// // Math.ceil(x)	Returns x rounded up to its nearest integer
// let Ceil = 2.88;
// let store2;
// store2 = Math.ceil(Ceil);
// console.log(store2); //3  to up
// //-----------------------------
// // Math.floor(x)	Returns x rounded down to its nearest integer
// let floor = 2.88;
// let store3;
// store3 = Math.floor(floor);
// console.log(store3); //2  to down
// //-----------------------------
// // Math.trunc(x)	Returns the integer part of x (new in ES6)
// let trunC = 2.88;
// let store4;
// store4 = Math.trunc(trunC);
// console.log(store4); //2  to down
// //-----------------------------
// //Math.pow(x,y)	Returns x to the power of y
// let power = 2;
// let power2 = 3;
// let store5;
// store5 = Math.pow(power, power2);
// console.log(store5); //8
// //-----------------------------
// //Math.sqrt(x)	Returns the square root of x
// let sqrt = 16;
// let store6;
// store6 = Math.sqrt(sqrt);
// console.log(store6); //4
// //-----------------------------
// //math.abs(x) Returns the absolute value of x (a positive number)
// let abs = -16;
// let store7;
// store7 = Math.abs(abs);
// console.log(store7); //16;
// //-----------------------------
// //math.sign(x) Returns -1 if x is negative, +1 if x is positive, and 0 if x is 0
// let sign = -10;
// let store8;
// store8 = Math.sign(sign);
// console.log(store8); //-1
// //-----------------------------
// //math.random()
// let random = Math.random() * 6 +1; //between 0 and 5 +1 so fisnal value is 0 6
// store = Math.trunc(random);
// console.log(store); //random number between 0 and 5
// //-----------------------------//---------------------

// //if statments
// let hours=13;
// if(hours<12){
//     console.log("good morning")
// }
// else{
//     console.log("good afternoon")
// }
// //-----------------------------
// //nested if statements
// let age=29;
// let student=false;
// if(age<=21){
//     if(student){
//         console.log("you are a kid")
//     }
//     else{
//         console.log("you are a minor")
//     }
// }
// else{
//     console.log("you are a adult")
// }
// //-----------------------------
// //else if
// if (age>=60){
//     console.log("you are a senior")
// }
// else if (age>=21){
//     console.log("you are a adult")
// }
// else{
//     console.log("you are a kid")
// }
// //-----------------------------
// //Ternary operator
// //(condition) ? expression1 : expression2
// let text = (age < 18) ? "Minor" : "Adult";
// //-----------------------------
// //ifApp
// let myAge;
// document.getElementById("submitStatment").onclick = function(){
//     myAge=document.getElementById("ageStatment").value;
//     myAge = Number(myAge);
//     if(myAge>18){
//         document.getElementById("ifMassage").textContent = `You can vote `+Math.trunc(myAge);

//     }

//     else{
//         document.getElementById("ifMassage").textContent = `You can't vote `+Math.trunc(myAge);
//     }
// }
// //-----------------------------//---------------------

//checked statment
//.checked like onclick
const myCheckBox = document.getElementById("myCheckBox");
const paymentVisa = document.getElementById("paymentVisa");
const paymentMaster = document.getElementById("paymentMaster");
const paymentPayPal = document.getElementById("paymentPayPal");
const submitPayment = document.getElementById("submitPayment");

submitPayment.onclick = function () {
  if (myCheckBox.checked) {
    document.getElementById("checkStatment").textContent =
      "the btn have been checked";
  } else {
    document.getElementById("checkStatment").textContent =
      "the btn havent been checked";
  }

  if (paymentPayPal.checked || paymentMaster.checked || paymentVisa.checked) {
    document.getElementById("radioStatment").textContent = "value_checked";
  } else {
    document.getElementById("radioStatment").textContent = "not checked";
  }
};
// //-----------------------------//---------------------

//tenrey oporators
//(condition) ? expression1 : expression2
let likes = 12;
likes > 100
  ? console.log("u seems popular")
  : console.log("u don't seems popular");
// //-----------------------------//---------------------

//switch statment
// switch(value){
//     case value1:
//         expression1;
//         break;
//     case value2:
//         expression2;
//         break;
//     default:
//         expression3;
//         break;
// }
//replacement for else if
//-----------------------------
let day = 1; //1 to 7
switch (day > 10) {
  case 1:
    console.log("the day is monday");
    break;
  case 2:
    console.log("the day is tuesday");
    break;
  case 3:
    console.log("the day is wednesday");
    break;
  case 4:
    console.log("the day is thursday");
    break;
  case 5:
    console.log("the day is friday");
    break;
  case 6:
    console.log("the day is saturday");
    break;
  case 7:
    console.log("the day is sunday");
    break;
  default:
    console.log("invalid day");
    break;
}
//-----------------------------
let myGrade = 90;
let gradeResult;
switch (true) {
  case myGrade >= 90:
    gradeResult = "A";
    break;
  case myGrade >= 80:
    gradeResult = "B";
    break;
  case myGrade >= 70:
    gradeResult = "C";
    break;
  case myGrade >= 60:
    gradeResult = "D";
    break;
  default:
    gradeResult = "F";
    break;
}
console.log(gradeResult);
// //-----------------------------//---------------------
// String methods 🧵
let user_x = "Ahmed";
let user_I = "ahmedramadan@gamil.com";
console.log(user_x.charAt(0)); //first value of the word
console.log(user_x.indexOf("")); //index of value
console.log(user_x.lastIndexOf("d")); //last index of value
console.log(user_x.length); //lenght of word
console.log(user_x.trim()); //remove any white space from start and end
console.log(user_x.toUpperCase()); //convert to uppercase
console.log(user_x.toLowerCase()); //convert to lowercase
console.log(user_x.repeat(3)); //repeat the word
if (user_x.startsWith("A")) {
  console.log("the word starts with A");
} else {
  console.log("the word doesn't start with A");
}
//-----------------------------
if (user_x.endsWith("d")) {
  console.log("the word ends with d");
} else {
  console.log("the word doesn't end with d");
}
//-----------------------------
if (user_x.includes(" ")) {
  console.log("the word includes space");
} else {
  console.log("the word doesn't includes space");
}
//-----------------------------
if (user_I.includes("@gamil.com")) {
  console.log("u cant type ur email here");
  user_I = user_I.replace("@gamil.com", "");
  console.log(`ur name after modified is ${user_I}`);
} else {
  console.log("alles gut!");
}
//-----------------------------
console.log(user_x.padEnd(10, ".")); // thats make end of value have just .... until it reach 10
console.log(user_x.padStart(10, ".")); // thats make start of value have just .... until it reach 10
// //-----------------------------//---------------------

//String slicing ✂
// sclicing for names  like example
let fullyName = "jousfsse yostena";
let numSpaceing = fullyName.indexOf(" "); //2 know where position of space
console.log(numSpaceing);
console.log(fullyName.slice(0, numSpaceing)); //print value before space
console.log(fullyName.slice(numSpaceing)); //print value after space
// //-----------------------------//---------------------

//Method chaining ⛓
//we use this method to make our code shorter and ez
//example that except a name from windows prompwt
let User = window.prompt("pls enter ur name here :");
User = User.trim().charAt(0).toUpperCase() + User.trim().slice(1).toLowerCase();
console.log(User);
// //-----------------------------//---------------------\\-----------------------------\\

// Logical operators ❗
// && and
// || or
// ! not
// //-----------------------------//---------------------\\-----------------------------\\

//Strict equality 🟰
//we have alot of condition about this
// = that define or put value in a variable
//== equality without checking the type
//=== equality checking type and value we mean type like if (23 == "23") that is true but if we use === (23 === "23") that is false
//-----------------------------//---------------------\\-----------------------------\\

//while loop 🔄
//condition first then the code will run until the condition is true
//Example :
let count = 1;
while (count <= 5) {
  console.log(count);
  count++;
}
//----------------------------------------
let userr = ""; //that will loob for user if it enter empty value
while (userr === "") {
  userr = window.prompt("pls enter ur name here :");
}
//----------------------------------------
let veid = "";
let gemme = "";
while ((veid === "" && gemme === "") || veid === null || gemme === null) {
  veid = window.prompt("pls enter ur name here :");
  gemme = window.prompt("pls enter ur email here :");
}
//-----------------------------//---------------------\\-----------------------------\\

//for loop
// its same thing theres no difrrent on concept but how thats written
// for (initialization;condition;expression){
//     code
// }
for (let i = 0; i < 5; i++) {
  console.log(i);
}
//-----------------------------//---------------------\\-----------------------------\\

// Functions 📞
// that accept from u prameters and then we call it in , void funcition

function myBirthDAY(myName, myAge) {
  console.log(`happy birthday ${myName} 
  `);
}
myBirthDAY();

function mins(x, y) {
  return x - y;
}
console.log(mins(3, 2));

function know(x) {
  // if (x % 2 === 0) {
  //   console.log(` number ${x} is even `);
  // } else {
  //   console.log(` number ${x} is odd`);
  // }
  return x % 2 === 0 ? true : false;
}
console.log(know(5));

function validEmail(EMO) {
  return EMO.includes("@gmail.com") ? true : false;
}
console.log(validEmail("ahmed@gmail.com"));

// //-----------------------------//---------------------\-----------------------------\\

//varible scoope
// there local var and global  var
// local:
function local() {
  let x = 10;
  console.log(x); //10
}
// global:
let y = 20;
console.log(y); // 20

// we can use global scope while there local scope by(.window)
// //-----------------------------\---------------------\\-----------------------------\\

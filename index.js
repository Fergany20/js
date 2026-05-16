// console.log('hallo guten tag');
// // window.alert('tchau');
// //-----------------------------
// document.getElementById('mytitle').textContent = "hallo from js";
// document.getElementById('p').textContent = "hallo from js";
// //-----------------------------//---------------------

// //vareibles 
// //numbers//
// let age = 21;
// let year = 2026;
// let price = 10.99;
// //-----------------------------
// console.log(`your age is ${age}`)
// console.log(`this year is: ${year}`)
// console.log(`the price is: ${price}`)
// //-----------------------------
// console.log(typeof age)
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
//-----------------------------//---------------------

//if statments
let hours=13;
if(hours<12){
    console.log("good morning")
}
else{
    console.log("good afternoon")
}
//-----------------------------
//nested if statements 
let age=29;
let student=false;
if(age<=21){
    if(student){
        console.log("you are a kid")
    }
    else{
        console.log("you are a minor")
    }
}
else{
    console.log("you are a adult")
}
//-----------------------------
//else if
if (age>=60){
    console.log("you are a senior")
}
else if (age>=21){
    console.log("you are a adult")
}
else{
    console.log("you are a kid")
}
//-----------------------------
//Ternary operator
//(condition) ? expression1 : expression2
let text = (age < 18) ? "Minor" : "Adult";
//-----------------------------
//ifApp
let myAge;
document.getElementById("submitStatment").onclick = function(){
    myAge=document.getElementById("ageStatment").value;
    myAge = Number(myAge);
    if(myAge>18){
        document.getElementById("ifMassage").textContent = `You can vote `+Math.trunc(myAge);

    }

    else{
        document.getElementById("ifMassage").textContent = `You can't vote `+Math.trunc(myAge);
    }
}
//--------------------------------------------------------
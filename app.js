// // Assignment # 21-25
// // 1
// var firstName = prompt("Enter your First Name:");
// var lastName = prompt("Enter your Last Name:");
// var fullName = firstName + " " + lastName;
// alert("Welcome to " + fullName);

// // 2
// var mobile = prompt("Enter your Favourite Mobile and Model:");
// var length = mobile.length;
// document.write("My favourite mobile is: " + mobile + "<br>");
// document.write("Length of String: " + length);

// // 3
// var nation = "Pakistani";
// var index = nation.indexOf("n");
// document.write("String: " + nation + "<br>");
// document.write("Index of 'n': " + index);



// // 4
// var word = "Hello World";
// var index = word.lastIndexOf("l");
// document.write("String: " + word + "<br>");
// document.write("Last Index of 'l': " + index);


// // 5
// var nation = "Pakistani";
// var index = nation.charAt(3);
// document.write("String: " + nation + "<br>");
// document.write("Character at Index 3: " + index);


// // 6
// var firstName = prompt("Enter your First Name:");
// var lastName = prompt("Enter your Last Name:");
// var fullName = string.concat(firstName, lastName);
// alert("Welcome to " + fullName);

// // 7
// var word = "Hyderabad";
// var replace = word.replace("Hyder","Islam");
// document.write("City: " + word + "<br>");
// document.write("After Replacemnet: " + replace);

// // 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replace =  message.replace(/and/gi,"&");
// document.write("Message: " + word + "<br>");
// document.write("After Replacemnet: " + replace);

// // 9
// var value1 = "472";
// var value2 = Number(value1)
// document.write("<br>Value: " + value1);
// document.write("<br>Type: " + typeof(value1));
// document.write("<br>Value: " + value2);
// document.write("<br>Type: " + typeof(value2));


// // 10
// var input = prompt("Enter anything name:", "in lowercase");
// var convert = input.toUpperCase();
// document.write("<br> User Input: " + input);
// document.write("<br> Upper Case: " + convert);


// // 11
// var input = prompt("Enter anything name:",);
// var first = input.slice(0,1);
// var convert1 = first.toUpperCase();
// var second = input.slice(1);
// var convert2 = second.toLowerCase();
// document.write("<br> User Input: " + input);
// document.write("<br> Title Case: " + convert1 + convert2);


// // 12
// var num = 35.36;
// var str = num.toString()
// document.write("<br> Number: " + num);
// document.write("<br> String: " + str);


// // 13
// var username = prompt("Enter your Username: ");
// for(var i=0; i<username.length; i++){
//     if(username.charCodeAt(i) >= 33 && username.charCodeAt(i) <= 64){
//         alert("Please enter a valid username.");
//     }
// }


// // 14
// var confirmation;
// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var takeorder = prompt("WELCOME, What you want to order search it first:");
// var order = takeorder.toLowerCase()
// for(var i=0; i<items.length; i++){
//     if(items[i] == order){
//         confirmation = 1;
//         break;
//     }
// }
// if(confirmation === 1){
//     alert(takeorder + " is available at index " + i + " in our Bakery.");
// }
// else{
//     alert("Sorry! " + takeorder + " is not available in our Bakery.");
// }



// // 15
// var alphaCount = 0;
// var numCount = 0;
// var password = prompt("Enter your password: ");
// var start = password.slice(0, 1);
// var length = password.length;
// if (start >= 0 && start <= 9) {
//     alert("Invalid Password, Can't be start with Number.");
// }
// else if (length < 6) {
//     alert("Invalid Password, Password is too short(At least 6 characters are required).");
// }


// // 16
// var str = "University of Karachi";
// var res = str.split("");
// document.write(res);


// // 17
// var input = prompt("Enter a country Name: ");
// var last = input.charAt(input.length-1)
// document.write("<br>User input: " + input);
// document.write("<br>Last Character of input: " + last);


// // 18
// var text = "The quick brown fox jumps over the lazy dog";
// var count = 0;
// for(var i=0; i<text.length; i++){
//     if(text.slice(i, i+3) == "and"){
//         count++;
//     } 
// }
// document.write("<br>Text: " + text);
// document.write("<br>There are " + count + " occurence(s) of the word 'the'");









// // Assignment # 26-30
// // 1
// var positiveNumber = +prompt("Enter a positive number: ");
// var round = Math.round(positiveNumber)
// var floor = Math.floor(positiveNumber)
// var ceil = Math.ceil(positiveNumber)
// document.write("<br>Number: " + positiveNumber);
// document.write("<br>Round off Value: " + round);
// document.write("<br>Floor Value: " + floor);
// document.write("<br>Ceil Value: " + ceil);


// // 2
// var negativeNumber = +prompt("Enter a negative number: ");
// var round = Math.round(negativeNumber)
// var floor = Math.floor(negativeNumber)
// var ceil = Math.ceil(negativeNumber)
// document.write("<br>Number: " + negativeNumber);
// document.write("<br>Round off Value: " + round);
// document.write("<br>Floor Value: " + floor);
// document.write("<br>Ceil Value: " + ceil);


// // 3
// var number = +prompt("Enter any number: ");
// var absolute = Math.abs(number)
// document.write("<br>The absolute value of " + number + " is " + absolute);


// // 4
// var random = Math.random() * 6;
// var dice = Math.ceil(random);
// document.write("Random Dice Value: " + dice);

// // 5
// var random = Math.random() * 2;
// var coin = Math.ceil(random);
// if(coin==1){
//     document.write("Random Coin Value: HEAD");
// }
// else{
//     document.write("Random Coin Value: TAIL");
// }


// // 6
// var random = Math.random() * 100;
// var number = Math.ceil(random);
// document.write("Random Number between 1 and 100: " + number);


// // 7








// // 8
// var secretNumber = Math.ceil(Math.random() * 10)
// var userNumber = +prompt("Guess a Number between 1-10");
// if(secretNumber == userNumber){
//     alert("Congratulations, you guess a correct number.");
// }
// else{
//     alert("Try Again");
// }





// // Assignment # 31-34
// // 1
// document.write(new Date());

// // 2
// var month = ["January","February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var rightnow = new Date()
// var monthcount = rightnow.getMonth()
// document.write("Current Month: " + month.indexOf(monthcount));

// // 3
// var rightnow = new Date()
// rightnow = rightnow.toString()
// var day = rightnow.slice(0,3);
// document.write("Today is " + day);


// // 4
// var rightnow = new Date()
// rightnow = rightnow.toString()
// var day = rightnow.slice(0, 3);
// if ((day === "Sat") || (day === "Sun")) {
//     document.write("Today is Fun day!");
// }


// // 5
// var rightnow = new Date();
// rightnow = rightnow.toString()
// rightnow = rightnow.Number(rightnow)
// var date = rightnow.slice(8, 2);
// if((date <= 15){
//     document.write("First fifteen days of the month");
// }
// else{
//     document.write("Last fifteen days of the month");
// }

// // 6
// var date = new Date();
// var millisec = date.getTime();
// var min = millisec/(1000*60);
// document.write("<br>Milliseconds, since January 1, 1970: " + millisec);
// document.write("<br>Minutes, since January 1, 1970: " + min);


// // 7
// var date = new Date();
// var hour = date.getHours();
// if (hour > 12) {
//     document.write("<br>It's PM");
// }
// else{
//     document.write("<br>It's AM");
// }

// // 8
// var date = new Date("June 18, 2015")
// document.write(date);
// var sec = date.getTime();
// var newDate = new date()
// var newSec = newDate.getTime();
// var diff = newSec - sec;
// diff = diff/(1000*60*60*24);
// document.write(diff + " days have passed since 1st Ramadan, 2015");


// // 9


// // 10


// // 11


// // 12


// // 13


// // 14
// var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var today = new Date();
// var currentMonth = today.getMonth();
// currentMonth = month[currentMonth];
// var charges, surcharge, lateCharges;
// var customerName = prompt("Enter Customer Name:");
// var units = prompt("Enter Consume Unit:");
// charges = units * 16;
// surcharge = (charges/100)*5;
// lateCharges = charges + surcharge;
// document.write("<h1>K-Electric Bill</h1>");
// document.write("<br><h3>Customer Name: " + customerName);
// document.write("<br>Billing Month: " + currentMonth);
// document.write("<br>Number of units: " + units);
// document.write("<br>Charges per unit: Rs.16");
// document.write("<br>");
// document.write("<br>Net Amount Payable (within Due Date): " + charges);
// document.write("<br>Late Payment Surcharge: " + Math.ceil(surcharge));
// document.write("<br>Gross Amount Payable (after Due Date): " + Math.ceil(lateCharges));



// // Assignment # 35-38
// 1
// date();
// function date(){
//     var date = new Date();
//     document.write(date);
// }


// 2
// var firstName = prompt("Enter your First Name:");
// var lastName = prompt("Enter your Last Name:");
// greet(firstName,lastName);
// function greet(a,b){
//     var fullName = a + " " + b;
//     alert("Welcome, " + fullName);
// }


// 3
// var num1 = +prompt("Enter First Number:");
// var num2 = +prompt("Enter Second Number:");
// var result = sum(num1, num2);
// document.write(num1 + " + " + num2 + " = " + result);
// function sum(a,b){
//     var c = a + b;
//     return c;
// }

// 4
// var num1 = +prompt("Enter First Number:");
// var num2 = +prompt("Enter Second Number:");
// var oper = prompt("Enter Any operator like (+, -, *, /, %):");
// var result = cal(num1, num2, oper);
// document.write(num1 + " " + oper + " " + num2 + " = " + result);
// function cal(a, b, o) {
//     if (o == "+") {
//         var c = a + b;
//         return c;
//     }
//     else if (o == "-") {
//         var c = a - b;
//         return c;
//     }
//     else if (o == "*") {
//         var c = a * b;
//         return c;
//     }
//     else if (o == "/") {
//         var c = a / b;
//         return c;
//     }
//     else if (o == "%") {
//         var c = a % b;
//         return c;
//     }
//     else{
//         alert("Invalid Operator.");
//     }
// }


// 5
// var num = +prompt("Enter any Number for Squre: ");
// var sq = square(num);
// function square(a){
//     var s = a * a;
//     return s;
// } 
// document.write("The Square of " + num + " is " + sq);

// 6
// var num = +prompt("Enter any Number for Factorial:");
// var result = fac(num);
// function fac(a){
//     var b = 1
//     for(var i=1; i<=a; i++){
//         b = b*i;
//     }
//     return b;
// }
// document.write("Factorial of " + num + " is " + result);

// 7
// var num1 = +prompt("Enter an starting number for counting:");
// var num2 = +prompt("Enter an ending number for counting:");
// count(num1, num2);
// function count(a, b) {
//     for (a; a <= b; a++) {
//         document.write(a + "<br>");
//     }
// }

// 8
// var per =  +prompt("Enter Perpendicular(a) Value:");
// var base =  +prompt("Enter Base(b) Value:");
// var hyp = cal(per,base);
// hyp = Math.sqrt(hyp);
// hyp = hyp.toFixed(2);
// function cal(a,b){
//     var c = pow(a) + pow(b);
//     return c;
// }
// function pow(val){
//     var p = val * val;
//     return p;
// }
// document.write("<br><h1>Given:</h1>");
// document.write("Perp(a) = " + per);
// document.write("<br>Base(b) = " + base);
// document.write("<br>");
// document.write("<br><h1>Required:</h1>");
// document.write("Hyp(c) = " + hyp);


// 9(i)
// var area = ar(6,3);
// function ar(a,b){
//     var c = a*b;
//     document.write("Area of a rectangle = " + c);
// }
// 9(ii)
// var width =  +prompt("Enter Width:");
// var height =  +prompt("Enter Height:");
// var area = ar(width,height);
// function ar(a,b){
//     var c = a*b;
//     return c;
// }
// document.write("Area of a rectangle = " + area);


// 10
// var str = prompt("Enter any String:");
// var result = palindrome(str);
// function palindrome(word) {
//     const reversed = word.split('').reverse().join(''); 
//     if(word === reversed){
//         document.write("It's a palindrome");
//     }
//     else{
//         document.write("It's not a palindrome");
//     }
//  }

// 11
// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var i = 0; i < array1.length; i++){
//       newarray1.push(array1[i].charAt(0).toUpperCase()+array1[i].slice(1));
//   }
//   return newarray1.join(' ');
// }
// document.write(uppercase("the quick brown fox"));
 

// 12
// function longestWord(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var i = 1 ; i < array1.length ; i++)
//   {
//     if(result.length < array1[i].length)
//     {
//     result = array1[i];
//     } 
//   }
//   return result;
// }
// document.write(longestWord('Web Development Tutorial'));

// 13
// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var index = 0; index < str.length; index++) 
//  {
//     if (str.charAt(index) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// document.write(char_count('JSResourceS.com', 'o'));


// 14
// var radius = +prompt("Enter Radius of Circle:");
// var circum = calcCircumference(radius);
// document.write("The Circumference is " + circum.toFixed(2));
// var area = calcArea(radius);
// document.write("<br>The Area is " + area.toFixed(2));
// function calcCircumference(r){
//     var c = 2*3.142*r;
//     return c;
// }
// function calcArea(r){
//     var c = 3.142*r*r;
//     return c;
// }

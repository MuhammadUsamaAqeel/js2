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
var password = prompt("Enter your password: ");
var start = password.slice(0,1);
var length = password.length;
if(start >= 0 && start<= 9){
    alert("Invalid Password, Can't be start with Number.");
}
else if(length<6){
    alert("Invalid Password, Password is too short(At least 6 characters are required).");
}

// // 16



// // 17


// // 18










// // Assignment # 2
// // 1
// var username;

// // 2
// var myName = "Muhammad Usama Aqeel";

// // 3
// var message;
// message = "Hello World!";
// alert(message);

// // 4
// var studentName = "Muhammad Usama Aqeel";
// var studentAge ="22 years old";
// var studentCourse ="Web and Mobile Hybird Application Development";
// alert(studentName);
// alert(studentAge);
// alert(studentCourse);

// // 5
// var food="Pizza";
// alert(food +"\n"+ "Pizz" +"\n"+ "Piz" + "\n" + "Pi" +"\n" + "P");

// // 6
// var email="muhammadusama220@yahoo.com";
// alert("My email address is "+email);

// // 7
// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the Book " + book);

// // 8
// document.write("Yah! I can write HTML content through JavaScript.");

// // 9
// var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(design);





// // Assignment # 3
// // 1
// var age = 22;
// alert("I am " + age + " years old.");

// // 2
// alert("You have visited this site "  + " times")

// // 3
// var birthYear = 1998;
// document.write("My Birth Year is " + birthYear + "<br>" + "Data type of my declared variable is number.");

// // 4
// var visitorName = "Muhammad Usama Aqeel";
// var productTitle = "T-Shirt";
// var productQuantity = 5;
// document.write(visitorName +" ordered " + productQuantity + " " + productTitle + "(s) on XYZ Clothing store");






// // Assignment # 4
// // 1
// var studentName, studentId, studentBatch;

// // 2 
// var Name, father_Name, state1, val2, price$;
// var 12, 1val, Father Name, Number?;

// // 3
// document.write("Rules for naming JS variables" + "<br>" + "Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable" + "<br>" + "Variables must begin with a ______, ______ or _____. For example $name, _name or name" + "<br>" + "Variable names are case _________" + "<br>" + "Variable names should not be JS _________");





// // Assignment # 5 
// // 1
// var val1 = +prompt("For Addition", "Enter First Value: ");
// var val2 = +prompt("For Addition", "Enter Second Value: " );
// var val = val1 + val2;
// document.write("<br> Sum of " + val1 + " and " + val2 + " is " + val);

// // 2
// var val1 = +prompt("For Subtraction", "Enter First Value: ");
// var val2 = +prompt("For Subtraction", "Enter Second Value: " );
// var val = val1 - val2;
// document.write("<br> Difference of " + val1 + " and " + val2 + " is " + val);
// var val1 = +prompt("For Multiplication", "Enter First Value: ");
// var val2 = +prompt("For Multiplication", "Enter Second Value: " );
// var val = val1 * val2;
// document.write("<br> Product of " + val1 + " and " + val2 + " is " + val);
// var val1 = +prompt("For Division", "Enter First Value: ");
// var val2 = +prompt("For Division", "Enter Second Value: " );
// var val = val1 / val2;
// document.write("<br> Division of " + val1 + " and " + val2 + " is " + val);
// var val1 = +prompt("For Modulus", "Enter First Value: ");
// var val2 = +prompt("For Modulus", "Enter Second Value: " );
// var val = val1 % val2;
// document.write("<br> Modulus of " + val1 + " and " + val2 + " is " + val );

// // 3
// var num;
// document.write("Value after variable declaration is: " +num);
// num = 5;
// document.write("<br>Initial value: " + num);
// num = ++num;
// document.write("<br>Value after increment is: " + num);
// num = num + 7;
// document.write("<br>Value after addition is: " + num);
// num = --num;
// document.write("<br>Value after decrement is: " + num);
// num = num % 3;
// document.write("<br>The remainder is : " + num);

// // 4
// var cost = 600;
// var totalCost = cost*5;
// document.write("Total Cost to buy 5 tickets to a movie is " + totalCost + "PKR");

// // 5
// var num = +prompt("Enter a number: ","For Table");
// var i;
// document.write("Table of " + num);
// document.write("<br>");
// for( i = 1 ; i <= 10; i++){
//     document.write( num + " x " + i + " = " + num*i);
//     document.write("<br>");
// }

// // 6
// var tc = +prompt("Enter Temperature(Celsius):");
// var tf = (tc *(9/5)) + 32;
// document.write(tc + "(Celsius) to " + tf + "(Fahrenheit) Temperature.");
// document.write("<br>");
// var tf = +prompt("Enter Temperature(Fahrenheit):");
// var tc = (tf - 32) * (5/9);
// document.write(tf + "(Fahrenheit) to " + tc + "(Celsius) Temperature.");

// // 7
// var q1 = +prompt("Enter Quantity for item 1 (price:650 PKR):");
// var q2 = +prompt("Enter Quantity for item 2 (price:100 PKR):");
// var p1 = 650;
// var p2 = 100;
// var t1 = p1 * q1;
// var t2 = p2 * q2;
// var s = 100;
// var t = t1 + t2 + s;
// document.write("<h2>Shopping Cart</h2>");
// document.write("Price of Item 1 is " + p1 + " PKR");
// document.write("<br>Quantity of Item 1 is " + q1);
// document.write("<br>Price of Item 2 is " + p2 + " PKR");
// document.write("<br>Quantity of Item 2 is " + q2);
// document.write("<br>Shipping Charges " + s + " PKR");
// document.write("<br>Total Cost of your order is " + t + " PKR");

// // 8
// var totalMarks = +prompt("Enter Total Marks: ");
// var obtainedMarks = +prompt("Enter Obtained Marks: ");
// var per = (obtainedMarks/totalMarks)*100;
// document.write("<h2>Mark Sheet</h2>");
// document.write("Total Marks: " + totalMarks);
// document.write("<br>Obtained Marks: " + obtainedMarks);
// document.write("<br>Percentage: " + per + "%");

// // 9
// var dollars = +prompt("Enter Amount (Dollar): ");
// var riyals = +prompt("Enter Amount (Riyal): ");
// var amount = dollars*104.80 + riyals*25;
// document.write("<h2>Currency in PKR</h2>");
// document.write("Total Currency in PKR: " + amount);

// // 10
// var number = +prompt("Enter any number: ");
// var result = ((number + 5)*10)/2;
// document.write("Result: " + result);

// // 11
// var currentYear = +prompt("Enter Current Year: ");
// var birthYear = +prompt("Enter Birth Year: ");
// var age = currentYear - birthYear;
// document.write("<h2>Age Calculator</h2>");
// document.write("Current Year: " + currentYear);
// document.write("<br>Birth Year: " + birthYear);
// document.write("<br>Your Age is: " + age);

// // 12
// var radius = +prompt("Enter the value of radius:");
// var circumference = 2*3.142*radius;
// var area = 3.142*radius*radius;
// document.write("<h2>The Geometrizer</h2>");
// document.write("<br>Radius of a circle: " + radius);
// document.write("<br>The circumference is: " + circumference);
// document.write("<br>The area is: " + area);

// // 13
// var snacks = prompt("Enter your favourite Snacks:");
// var currentAge = +prompt("Enter your current age:");
// var maximumAge = +prompt("Enter your maximum age(estimated):");
// var snacksAmount = +prompt("Enter your estimated amount per day (as a number):");
// var requiredSnacks = ((maximumAge - currentAge)*365)*snacksAmount;
// document.write("<h2>The Lifetime Supply Calculator</h2>");
// document.write("<br>Favourite Snack: " + snacks);
// document.write("<br>Current Age: " + currentAge);
// document.write("<br>Estimated Maximum Age : " + maximumAge);
// document.write("<br>Amount of Snacks per day: " + snacksAmount);
// document.write("<br>You will need " + requiredSnacks + " " + snacks + " to last you until the ripe old age of " + maximumAge);






// // Assignment # 6-9
// // 1
// var a = +prompt("Enter a Number:");
// document.write("Result:");
// document.write("<br>The value of a is: " + a);
// document.write("<br>..................................................");
// document.write("<br>");
// document.writeln("<br>The value of ++a is: " + ++a);
// document.writeln("<br>Now the value of a is: " + a);
// document.write("<br>");
// document.writeln("<br>The value of a++ is: " + a++);
// document.writeln("<br>Now the value of a is: " + a);
// document.write("<br>");
// document.writeln("<br>The value of --a is: " + --a);
// document.writeln("<br>Now the value of a is: " + a);
// document.write("<br>");
// document.writeln("<br>The value of a-- is: " + a--);
// document.writeln("<br>Now the value of a is: " + a);

// // 2
// var a=2, b=1;
// document.write("a is: " + a);
// document.write("<br>b is: " + b);
// var result = --a - --b + ++b + b--;
// document.write("<br>result is: " + result);

// // 3
// var userName = prompt("Enter Your Name: ");
// alert("Welcome " + userName);

// // 5
// var num = +prompt("Enter a number: ","For Table");
// var i;
// if(num === 0){
//     document.write("Table of 5");
//     document.write("<br>");
//     for( i = 1 ; i <= 10; i++){
//         document.write( 5 + " x " + i + " = " + 5*i);
//         document.write("<br>");
//     }
// }
// else{
//     document.write("Table of " + num);
//     document.write("<br>");
//     for( i = 1 ; i <= 10; i++){
//         document.write( num + " x " + i + " = " + num*i);
//         document.write("<br>");
//     }
// }

// // 6
// var subject1 = prompt("Enter First Subject Name: ");
// var subject2 = prompt("Enter Second Subject Name: ");
// var subject3 = prompt("Enter Third Subject Name: ");
// var maxMarks = 100;
// var totalMarks = maxMarks*3;
// var obtainedMarks1 = +prompt("Enter " + subject1 + " Marks:");
// var obtainedMarks2 = +prompt("Enter " + subject2 + " Marks:");
// var obtainedMarks3 = +prompt("Enter " + subject3 + " Marks:");
// var obtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// var per = (obtainedMarks/totalMarks)*100;
// var per1 = (obtainedMarks1/maxMarks)*100;
// var per2 = (obtainedMarks2/maxMarks)*100;
// var per3 = (obtainedMarks3/maxMarks)*100;
// document.write("<h4>Subjects &nbsp; Total Marks &nbsp; Obtained Marks &nbsp; Percentage</h4>");
// document.write(subject1 + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + maxMarks + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + obtainedMarks1 + "&nbsp; &nbsp &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + per1 + "%");
// document.write("<br>");
// document.write(subject2 + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + maxMarks + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + obtainedMarks2 + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + per2 + "%");
// document.write("<br>");
// document.write(subject3 + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + maxMarks + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + obtainedMarks3 + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + per3 + "%");
// document.write("<br>");
// document.write("&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + totalMarks + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + obtainedMarks + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + per + "%");





// // Assignment # 9-11
// // 1
// var city = prompt("Enter your City Name:");
// if(city=="karachi" || city=="Karachi" || city=="KARACHI"){
//     alert("Welcome to city of lights");
// }

// // 2
// var gender = prompt("Enter your Gender:");
// if(gender=="Male" || gender=="MALE" || gender=="male"){
//     alert("Good Morning Sir.");
// }
// else if(gender=="Female" || gender=="FEMALE" || gender=="female"){
//     alert("Good Morning Ma'am.");
// }
// else{
//     alert("Please enter correct gender like Male or Female!");
// }

// // 3
// var signal = prompt("Enter your Traffic Signal Color:");
// if(signal=="RED" || signal=="Red" || signal=="red"){
//     alert("Must Stop");
// }
// else if(signal=="YELLOW" || signal=="Yellow" || signal=="yellow"){
//     alert("Ready to Move");
// }
// else if(signal=="GREEN" || signal=="Green" || signal=="green"){
//     alert("Move now");
// }
// else{
//     alert("Please enter correct Traffic Signal Color like Red, Yellow or Green!");
// }

// // 4
// var fuel = +prompt("Enter your remaining Fuel in Car (Litres)");
// if(fuel<0.25){
//     alert("Please refill the fuel in your car");
// }

// // 5
// // ...........a...........
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// // ...........b...........
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// // ...........c...........
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// // ...........d...........
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// // ...........e...........
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// // ...........f...........
// if("car" < "cat"){
// alert("car is smaller than cat");
// }

// // 6
// var totalMarks=300;
// var marks1 = +prompt("Enter First Subject Marks: ");
// var marks2 = +prompt("Enter Second Subject Marks: ");
// var marks3 = +prompt("Enter Third Subject Marks: ");
// var obtainedMarks = marks1 + marks2 + marks3;
// var per = (obtainedMarks/totalMarks)*100;
// document.write("<h2>Mark Sheet</h2>");
// document.write("<br>Total Marks: " + totalMarks);
// document.write("<br>Obtained Marks: " + obtainedMarks);
// document.write("<br>Percentage: " + per + "%");
// if(per>=80 && per<=100){
//     document.write("<br>Grade: A-one");
//     document.write("<br>Remarks: Excellent");
// }
// else if(per>=70 && per<=80){
//     document.write("<br>Grade: A");
//     document.write("<br>Remarks: Good");
// }
// else if(per>=60 && per<=70){
//     document.write("<br>Grade: B");
//     document.write("<br>Remarks: You need to improve");
// }
// else if(per<60){
//     document.write("<br>Grade: Fail");
//     document.write("<br>Remarks: Sorry");
// }

// // 7
// var secrectnum = 6;
// var num = +prompt("Guess the Number Between 1-10");
// if(num==secrectnum){
//     alert("Bingo! Correct answer");
// }
// else if(num+1 == secrectnum || num-1 == secrectnum){
//     alert("Close enough to the correct answer");
// }
// else if(num>10){
//     alert("You Entered a number which is beyond the limit So Enter again a number which is between 1-10");
// }
// else{
//     alert("You Entered Wrong Number!")
// }

// // 8
// var num = +prompt("Enter a number to check whether it is divisible by 3 or not?");
// if(num%3 == 0){
//     alert("Yes, " + num + " is divisible by 3");
// }
// else{
//     alert("No, " + num + " is not divisible by 3");
// }

// // 9
// var num = +prompt("Enter a number to check whether it is EVEN or ODD Number?");
// if(num%2 == 0){
//     alert(num + " is an Even Number");
// }
// else{
//     alert(num + " is an Odd Number");
// }

// // 10
// var tem = +prompt("Enter Temperature in celsius: ");
// if(tem>40){
//     alert("It is too hot outside.");
// }
// else if(tem>30){
//     alert("The Weather today is Normal.");
// }
// else if(tem>20){
//     alert("Today’s Weather is cool.");
// }
// else if(tem>10){
//     alert("OMG! Today’s weather is so Cool.");
// } 

// // 11
// var num;
// var num1 = +prompt("Enter First Number:");
// var num2 = +prompt("Enter Second Number:");
// var operator = prompt("Enter Operator (+, -, *, /, %)");
// if(operator == "+"){
//     num = num1 + num2;
//     alert(num1 + " + " + num2 + " = " + num);
// }
// else if(operator == "-"){
//     num = num1 - num2;
//     alert(num1 + " - " + num2 + " = " + num);
// }
// else if(operator == "*"){
//     num = num1 * num2;
//     alert(num1 + " x " + num2 + " = " + num);
// }
// else if(operator == "/"){
//     num = num1 / num2;
//     alert(num1 + " / " + num2 + " = " + num);
// }
// else if(operator == "%"){
//     num = num1 % num2;
//     alert(num1 + " % " + num2 + " = " + num);
// }
// else{
//     alert("You Entered Wrong Operator");
// }



// // Assignment # 12-13
// // 1
// var response = prompt("Enter any Character:");
// if(+response >=0 && +response <= 9){
//     alert("It is a Number");
// }
// else if(response.charCodeAt(0) >=65 && response.charCodeAt(0) <= 90){
//     alert("It is a Uppercase Letter");
// }
// else if(response.charCodeAt(0) >=97 && response.charCodeAt(0) <= 122){
//     alert("It is a Lowercase Letter");
// }
// else{
//     alert("It is not a Number or Upper and Lower Case letter.");
// }

// // 2
// var integer1 = +prompt("Enter First Integer:");
// var integer2 = +prompt("Enter Second Integer:");
// if(integer1<integer2){
//     alert(integer2 + " is greater than " + integer1);
// }
// else if(integer1>integer2){
//     alert(integer1 + " is greater than " + integer2);
// }
// else{
//     alert(integer1 + " and " + integer2 + " are equal.");
// }

// // 3
// var number = +prompt("Enter Any Number:");
// if(number<0){
//     alert(number + " is a negative number.");
// }
// else if(number>0){
//     alert(number + " is a positive number.");
// }
// else{
//     alert(number + " is zero.");
// }

// // 4
// var vowels = prompt("Enter Any Character:");
// if(vowels === "A" || vowels === "a" || vowels === "E" || vowels === "e" || vowels === "I" || vowels === "i" || vowels === "O" || vowels === "o" || vowels === "U" || vowels === "u"){
//     alert(vowels + " is a vowel");
// }
// else{
//     alert(vowels + " is not a vowel");
// }

// // 5
// var password = "Usama Aqeel";
// var userPassword = prompt("Enter Your Password: ");
// if(userPassword == 0){
//     alert("Please enter your Password!");
// }
// else if(userPassword === password){
//     alert("“Correct! The password you entered matches the original password");
// }
// else{
//     alert("Incorrect password");
// }

// // 6
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else{
// greeting = "Good evening";
// }
// alert(greeting);

// // 7
// var time = +prompt("Enter Time in 24 Hour Format like(19.00, 21.00, 00.00 etc");
// if(time>=5 && time<12){
//     alert("Good Morning");
// }
// else if(time>=12 && time<17){
//     alert("Good Afternoon");
// }
// else if(time>=17 && time<21){
//     alert("Good Evening");
// }
// else if(time>=21 && time<=23.59){
//     alert("Good Night");
// }
// else if(time>=0 && time<5){
//     alert("Good Night");
// }
// else{
//     alert("Please, Enter Correct Time!");
// }





// // Assignment # 14-16
// // 1
// var arr = [];

// // 2
// var arr1 = new Array();

// // 3
// var student = ["Abu Bakar", "Umar", "Usman", "Ali", "Muavia", "Hassan", "Hussain"];

// // 4
// var number = [6, 11, 12, 13, 15, 20, 26];

// // 5
// var boolean = [true, false, true];

// // 6
// var mixed = ["Usama", 53, "Aqeel", true];

// // 7
// var qualification = ["SSC", "HSC", "BSC", "BS", "BCOM", "MS", "M. Phil.", "Phd"];
// document.write("<h3><br>QUALIFICATIONS:</h3>");
// for(var i=0; i<qualification.length; i++){
//     document.write("<br>" + (i+1) + ") " + qualification[i]);
// }

// // 8
// var students = ["Muhammad", "Usama", "Aqeel"];
// var marks = [450, 300, 400];
// for(var i=0; i<marks.length; i++){
//     per = (marks[i]/500)*100;
//     document.write("<br>Score of " + students[i] + " is " + marks[i] + ". Percentage: " + per + "%");
// }

// // 9
// var color = ["green", "white", "yellow", "orange"];
// document.write(" <h4>Orignal Array with four Colors:</h4>");
// for(var i=0; i<color.length; i++){
//     document.write(color[i] + "<br>");
// }
// // ...........a...........
// var add = prompt("Enter a color which you want to add in beginning:");
// color.unshift(add)
// document.write("<br> <h4>After Addition in Beginning:</h4>");
// for(var i=0; i<color.length; i++){
//     document.write(color[i] + "<br>");
// }
// // ...........b...........
// var add = prompt("Enter a color which you want to add in end:");
// color.push(add)
// document.write("<br> <h4>After Addition in Last:</h4>");
// for(var i=0; i<color.length; i++){
//     document.write(color[i] + "<br>");
// }
// // ...........c...........
// var add1 = prompt("Enter first color which you want to add in beginning:");
// var add2 = prompt("Enter second color which you want to add in beginning:");
// color.unshift(add1, add2)
// document.write("<br> <h4>After Addition of two Colors in Beginning:</h4>");
// for(var i=0; i<color.length; i++){
//     document.write(color[i] + "<br>");
// }
// // ...........d...........
// color.shift()
// document.write("<br> <h4>After Deletion in Beginning:</h4>");
// for(var i=0; i<color.length; i++){
//     document.write(color[i] + "<br>");
// }
// // ...........e...........
// color.pop()
// document.write("<br> <h4>After Deletion in End:</h4>");
// for(var i=0; i<color.length; i++){
//     document.write(color[i] + "<br>");
// }
// // ...........f...........
// var index = +prompt("Enter index number where you want to add color");
// var add = prompt("Enter a color which you want to add in index[" + index + "]:");
// color.splice(index, 0, add)
// document.write("<br> <h4>After Addition in Middle of the colors Array:</h4>");
// document.write("You Added a Color at index[" + index + "]<br>");
// for(var i=0; i<color.length; i++){
//     document.write(color[i] + "<br>");
// }
// // ...........g...........
// var index = +prompt("Enter index number where you want to delete color");
// var quantity = prompt("How many colors do you want to delete from index[" + index + "]?");
// color.splice(index, quantity)
// document.write("<br> <h4>After Deletion in Middle of the colors Array:</h4>");
// document.write("You Delete " + quantity + " Colors at index[" + index + "]<br>" );
// for(var i=0; i<color.length; i++){
//     document.write(color[i] + "<br>");
// }

// // 10
// var score = [320, 230, 480, 120,];
// document.write("<br><h3>Scores of Students: ");
// for(var i=0; i<score.length; i++){
//     document.write(score[i] + ", ");
// }
// score.sort()
// document.write("<br>Ordered Scores of Students: ");
// for(var i=0; i<score.length; i++){
//     document.write(score[i] + ", ");
// }

// // 11
// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// var selectedCities = [];
// selectedCities = cities.slice(2,5)
// document.write("<h4>Cities List:<br>");
// document.write(cities);
// document.write("<br>");
// document.write("<br>Selected Cities List:<br>");
// document.write(selectedCities);

// // 12
// var arr = ["This", "is", "my", "cat"];
// document.write("<h3>Array:<br>");
// document.write(arr);
// document.write("<br><br>String:<br>");
// for(var i=0; i<arr.length; i++){
//     document.write(arr[i] + " ");
// }

// // 13
// var arr = [];
// arr.push("Usama");
// document.write(arr + "<br>");
// arr.push("Talha");
// document.write(arr + "<br>");
// arr.push("Haris");
// document.write(arr + "<br>");
// arr.push("Misal");
// document.write(arr + "<br>");

// // 14
// var arr = [];
// arr.unshift("Usama");
// document.write(arr + "<br>");
// arr.unshift("Talha");
// document.write(arr + "<br>");
// arr.unshift("Haris");
// document.write(arr + "<br>");
// arr.unshift("Misal");
// document.write(arr + "<br>");

// // 15






// // Assignment # 17-20
// // 1
// var student = [["Usama",22],["Haris",23]["Talha",23]];
// document.write(student[1][1]);

// // 2
// var num = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ];
// document.write("<h1>");
// for(var i=0; i<num.length; i++){
//     for(var j=0; j<4; j++){
//         document.write(num[i][j] + " ");
//     }
//     document.write("<br>");
// }

// // 3
// for(var i=1; i<=10; i++){
//     document.write("<h2>" + i);
// }

// // 4
// var num = +prompt("Enter a number to show its Multiplication Table:");
// var length = +prompt("Enter the length of Multiplication Table:");
// document.write("<h2>Table of " + num + "</h2>");
// document.write("<h4><br>");
// for(var i = 1 ; i <= length; i++){
//     document.write( num + " x " + i + " = " + num*i);
//     document.write("<br>");
// }

// // 5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// document.write("<h3>");
// for(var i=0; i<fruits.length; i++){
//     document.write(fruits[i] + "<br>");
// }
// document.write("<br>");
// for(var i=0; i<fruits.length; i++){
//     document.write("Element at index " + i + " is " + fruits[i] + "<br>");
// }

// // 6
// document.write("<br><h3>Counting:</h3>");
// for(var i=1; i<=15; i++){
//     document.write(i + ", ");
// }
// document.write("<br>");
// document.write("<br><h3>Reverse Counting:</h3>");
// for(var i=10; i>=1; i--){
//     document.write(i + ", ");
// }
// document.write("<br>");
// document.write("<br><h3>Even:</h3>");
// for(var i=0; i<=20; i=i+2){
//     document.write(i + ", ");
// }
// document.write("<br>");
// document.write("<br><h3>Odd:</h3>");
// for(var i=1; i<=20; i=i+2){
//     document.write(i + ", ");
// }
// document.write("<br>");
// document.write("<br><h3>Series:</h3>");
// for(var i=2; i<=20; i=i+2){
//     document.write(i + "k, ");
// }

// // 7
// A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var order = prompt("Welcome to our Bakery. What do you want to order Sir/Ma'am?");
// for(var i=0; i<A.length; i++){
//     if(A[i]==order){
//         alert(A[i] + " is available at index " + i + " in our Bakery.");
//         break;
//     }      
// }

// // 8
// var A = [24, 53, 78, 91, 12];
// var max = A[0];
// for(var i=1; i<A.length; i++){
//     if(A[i]>max){
//         max=A[i];
//     }
// }
// document.write("<br><h3>Array Items: " + A);
// document.write("<br>The Largest Number is: " + max);

// // 9
// var A = [24, 53, 78, 91, 12];
// var min = A[0];
// for(var i=1; i<A.length; i++){
//     if(A[i]<min){
//         min=A[i];
//     }
// }
// document.write("<br><h3>Array Items: " + A);
// document.write("<br>The Smallest Number is: " + min);

// // 10
// for(var i=5; i<=100; i=i+5){
//     document.write(i + ", ");
// }
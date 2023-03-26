// <---QUESTION#1--->


// var num1 = 5;
// var num2 = 4;
// var num = num1 + num2 ;
// document.write("Sum of " + num1 + " and " + num2 + " is ", num);

/////////////////////////////////////////////////////////////////////////


//   <----QUESTION#2----->
//SUBTRACTION

// var num1 = 5;
// var num2 = 4;
// var num = num1-num2 ;
// document.write("Sum of " + num1 + " and " + num2 + " is ", num);

// //MULTIPLICATION
// var num1 = 5;
// var num2 = 4;
// var num = num1*num2 ;
// document.write("Sum of " + num1 + " and " + num2 + " is ", num);


//// DIVISION
// var num1 = 5;
// var num2 = 4;
// var num = num1/num2 ;
// document.write("Sum of " + num1 + " and " + num2 + " is ", num);


// // MODULUS
// var num1 = 5;
// var num2 = 4;
// var num = num1%num2 ;
// document.write("Sum of " + num1 + " and " + num2 + " is ", num);





////////////////////////////////////////////////////////////////////////

//   <----QUESTION#3----->

// // Declare a variable
// var num;

// // Show value after variable declaration
// document.write("Value after variable declaration is: " + num + "<br>");

// // Initialize the variable with some number
// num = 5;

// // Show initial value
// document.write("Initial value: " + num + "<br>");

// // Increment the variable
// num++;

// // Show value after increment
// document.write("Value after increment is: " + num + "<br>");

// // Add 7 to the variable
// num += 7;

// // Show value after addition
// document.write("Value after addition is: " + num + "<br>");

// // Decrement the variable
// num--;

// // Show value after decrement
// document.write("Value after decrement is: " + num + "<br>");

// // Show remainder after dividing by 3
// document.write("The remainder is: " + (num % 3) + "<br>");


///////////////////////////////////////////////////////////////////////


//   <----QUESTION#4----->

// var ticket=600;
// var fiveTickets=5*600;
// document.write("Total cost to buy 5 tickets to a movie is ", fiveTickets + "PKR");

/////////////////////////////////////////////////////////////////////////////////////////////

//   <----QUESTION#5----->

// document.write("Table of 4<br/>");
// for ( j= 1; j<=10; j++) {
//     document.write(4 + "*"  + j + "=" + (4*j) +"<br/>") 
// }

///////////////////////////////////////////////////////////////////////////////




//   <----QUESTION#6----->

// var celsius=25;
// document.write("25C is ",(celsius*9/5)+32 ,"F"+ "<br/>");

// var fahrenheit=70;
// document.write("70F is " +(fahrenheit-32)*5/9 +"C");

///////////////////////////////////////////////////////////////////////


//  <-----QUESTION#7------->


// document.write("Price of item 1 is 650<br/>", " Quantity of item 1 is 3<br/>");
// document.write("Price of item 2 is 100<br/>", " Quantity of item 2 is 7<br/>");
// document.write("Shipping charges 100<br/>");
// var item_1=650*3;
// var item_2=100*7;
// var shoppingCharges=100;
// document.write("<br/>Total cost of your order is " , item_1 + item_2 + shoppingCharges);

///////////////////////////////////////////////////////////////////////


//  <-----QUESTION#8------->

// var totMarks=980;
// document.write("Total marks: ", totMarks + "<br/>");
// var obtMarks=804;
// document.write("Marks obtained: ", obtMarks + "<br/>");
// var percentage=(obtMarks*100/totMarks);
// document.write("Percentage: ", obtMarks + "%");

///////////////////////////////////////////////////////////////////

//  <-----QUESTION#9------->


// var dollar=104.80;
// var riyal=28;
// document.write("Total currency in PKR ",(dollar*10)+(riyal*25));


////////////////////////////////////////////////////////////////////////////

//  <-----QUESTION#10------->

// var num = 10;
// var result = ((num + 5) * 10) / 2;
// console.log(result);


/////////////////////////////////////////////////////////////////////////////



//  <-----QUESTION#11------->

// var birthYear=prompt("Enter your birth year :" + "<br/>");
// var currentYear=prompt("Enter the current year :" + "<br/>");
// document.write("current year :"+ (currentYear) + "<br/>");
// document.write("Birth year :"+ (birthYear) + "<br/>");
// document.write("Your age is :"+ (birthYear-currentYear));


///////////////////////////////////////////////////////////////////////

//    <------QUESTION#12---->

// var radius=20;
// var pi=3.142;
// document.write("Radius of circle: ", radius + "<br/>");
// document.write("The circumference is: "+ (2*pi)*radius + "<br/>");
// document.write("The area is: ", ((pi)*(radius*radius)));


//////////////////////////////////////////////////////////////////////////////////

//     <----QUESTION#13---->

let favoriteSnack = "chocolate chip";
document.write("Favorite snack: ", favoriteSnack +"<br/>");
let currentAge = 15;
document.write("Current Age: ", currentAge +"<br/>");
let maxAge = 65;
document.write("Estimated Maximum Age: ", maxAge +"<br/>");
let amountPerDay = 3;
document.write("Amount of Snacks Per Day: ", amountPerDay +"<br/>");
let yearsRemaining = maxAge - currentAge;
let totalSnacks = yearsRemaining  *amountPerDay;
document.write("You will need " + totalSnacks + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".");

////////////////////////////////////////////////////////////////////////////////////////////
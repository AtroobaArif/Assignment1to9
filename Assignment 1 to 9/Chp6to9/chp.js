// // <---QUESTION#1---->

// var a = 10;
// var b =  0;
// document.write("Result:" +"<br/>");
// document.write("The value of a is: " ,+  a+ "<br/>" );
// document.write("<br/>");
// var c = ++a;
// document.write("The value of ++a is: " ,+ c +"<br/>" );
// document.write("Now the value of a is: " ,+  a+ "<br/>" );
// document.write("<br/>");
// var d = a++;
// document.write("The value of a++ is: " ,  + d + "<br/>" );
// document.write("Now the value of a is: " ,+  a+ "<br/>" );
// document.write("<br/>");
// var e = --a;
// document.write("The value of --a is: "  ,  + e +"<br/>");
// document.write("Now the value of a is: " ,+  a + "<br/>" );
// document.write("<br/>");
// var f= a--;
// document.write("The value of a-- is:"  ,  + f +"<br/>" );
// document.write("Now the value of a is: " ,+  a+ "<br/>" );

/////////////////////////////////////////

// // <---QUESTION#2---->


// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;

// document.write("a is ",a+"<br/>"); 
// document.write("b is", b+"<br/>"); 
// document.write("result is ",result); 

// /////////////////////////////////////////


// // <---QUESTION#3---->
// var question = "Your name?";
// var defaultanswer = "Atrooba";
// var name = prompt(question, defaultanswer);


// var question = "Your age?";
// var defaultanswer = "19";
// var name = prompt(question ,defaultanswer);

// var message="Thank You Atrooba!"; 
// var greet="Thanks for visiting..";
// alert(message);
// alert(greet);

// // ////////////////////////////////////////////

// // <---QUESTION#5---->

// var num = prompt("Enter a number:");
// if (num != null && num != "") {
//   num = parseInt(num);
// } else {
//   num = 5;
// }
// var table = "<h2>Multiplication table of " + num + "</h2>";
// table += "<table>";
// for (var i = 1; i <= 10; i++) {
//   table += "<tr>";
//   table += "<td>" + num + " x " + i + "</td>";
//   table += "<td>=</td>";
//   table += "<td>" + (num * i) + "</td>";
//   table += "</tr>";
// }
// table += "</table>";
// document.write(table);
///////////////////////////////////////////////////////////////////


//// <---QUESTION#6---->


var subject1 = prompt("Enter name of first subject:");
var subject2 = prompt("Enter name of second subject:");
var subject3 = prompt("Enter name of third subject:");


var totalMarks = 100;


var obtainedMarks1 = parseFloat(prompt("Enter obtained marks for " + subject1));
var obtainedMarks2 = parseFloat(prompt("Enter obtained marks for " + subject2));
var obtainedMarks3 = parseFloat(prompt("Enter obtained marks for " + subject3));


var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var totalPercentage = (totalObtainedMarks / (totalMarks * 3)) * 100;


var resultTable = "<table>";
resultTable += "<tr>";
resultTable += "<th>Subject</th>";
resultTable += "<th>Total Marks</th>";
resultTable += "<th>Obtained Marks</th>";
resultTable += "<th>Percentage</th>";
resultTable += "</tr>";
resultTable += "<tr>";
resultTable += "<td>" + subject1 + "</td>";
resultTable += "<td>" + totalMarks + "</td>";
resultTable += "<td>" + obtainedMarks1 + "</td>";
resultTable += "<td>" + ((obtainedMarks1 / totalMarks) * 100) + "%</td>";
resultTable += "</tr>";
resultTable += "<tr>";
resultTable += "<td>" + subject2 + "</td>";
resultTable += "<td>" + totalMarks + "</td>";
resultTable += "<td>" + obtainedMarks2 + "</td>";
resultTable += "<td>" + ((obtainedMarks2 / totalMarks) * 100) + "%</td>";
resultTable += "</tr>";
resultTable += "<tr>";
resultTable += "<td>" + subject3 + "</td>";
resultTable += "<td>" + totalMarks + "</td>";
resultTable += "<td>" + obtainedMarks3 + "</td>";
resultTable += "<td>" + ((obtainedMarks3 / totalMarks) * 100) + "%</td>";
resultTable += "</tr>";
resultTable += "<tr>";
resultTable += "<td><strong>Total</strong></td>";
resultTable += "<td><strong>" + (totalMarks * 3) + "</strong></td>";
resultTable += "<td><strong>" + totalObtainedMarks + "</strong></td>";
resultTable += "<td><strong>" + totalPercentage + "%</strong></td>";
resultTable += "</tr>";
resultTable += "</table>";

document.write(resultTable);
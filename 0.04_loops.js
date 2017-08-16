// Loops

/*

lcv = loop control variable

for loop
--------------------------------

while loop
________________________________


for in loop
________________________________


do while loop
________________________________
runs at least once

*/
/*
// initialize the variable; have boolean expression; 
for (var i = 0; i < 10; i = i+1) {
	console.log(i)
}

for (var i =0; i <= 20; i +=2) {
	console.log(i);
}

// best practice?

var name = "Kenn"
for (var i = 0; i <name.length; i++) {
	console.log(name[i])
}




//initialize variable
var j = 0;
// boolean expression
while( j < 5) {
	j= j+1 // j += 1 or j ++ 1
	//step through the loop
	console.log(j);
}

while (true) {
	console.log("runs once");
	return false;
}

*/
var i = 0;
while (i < 100) {
	i += 10;
	console.log(i);
}


var studentName = "smita";
var capSN = "";
//		lcv		collection
for ( var l in studentName) {
	if (l == 0) {
		 capSN = studentName[l].toUpperCase();
	} else {
		capSN += studentName[l];
	}
	
}

	console.log(capSN);
	

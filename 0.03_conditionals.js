/* Conditionals */

/* 
	Chaining conditional operators
	______________________________
	&&
	||
*/

var name = "Kenn";

if ("Kenn" == name) {
	console.log("Hey your name is " + name);
} else {
	console.log("What is your name?");
}
//

var name = "kaylea";

/*if (name === "kaylea") {
	console.log(name[0].toUpperCase() + name[1] + name[2] + name[3] + name[4] + name[5]);
} else {
	console.log(name);
}*/

/*if (name === "kaylea") {
	name1 = name[0].toUpperCase();
	for(var i = 1; i < name.length; i +=1) {
		name1 += name[i];
	}
	console.log(name1);
} else {
	console.log(name);
}*/

if (name[0] != name[0].toUpperCase()) {
	(name[0] == name[0].toUpperCase() + name[1] + name[2] + name[3] + name[4] + name[5]);
	console.log("Check your punctuation!");
} else {
	console.log("Great punctuation!");
}

var age = 23;
//when writing if statements order matters
if (age >= 25) {
	console.log("Yay you get lower rates on your car rental!");
} else if (age >= 21) {
	console.log("Yay you can drink!");
} else if (age >= 18) {
	console.log("Yay you can vote!");
} else {
	console.log("Sorry! Too young to do anything.")
}
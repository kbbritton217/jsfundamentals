// Defining variables
let input = document.getElementById("input");
let output = document.getElementById("output");
let listHeading = document.getElementById("listHeading"); // --- my solution
//let ulist = document.get ElementById("friendsList"); --- Instructor solution
//let newName = ""; --- also Instructor solution

//console.log(input.value);
function clear(){
	document.getElementById('input').value="";
} //my solution

//function to show or hide list header
function header() {
	if (output.innerHTML === ""){
	listHeading.innerHTML ="";
} else {
	listHeading.innerHTML ="<h3> Capitalized name(s): </h3>";
}
} // --- my solution

//function to capitalize first letter of input name
function capitalize() {
	let newName = "";

	for (let l in input.value) {
		if (l == 0) {
			newName = input.value[l].toUpperCase();
		} else {
			newName += input.value[l].toLowerCase(); 
		} 
	}
	output.innerHTML += '<li>' + newName + '</li>';
		header();
		clear();
}

// jQuery Solution to using enter key
$('input').keyup(function (e) {
	if (e.keyCode === 13) {
		capitalize();
	}
}) // --- my solution



// Javascript Solution to using enter key
/*document.onkeypress = function (e) {
	if (e.keyCode === 13) {
		capitalize();
	}
}*/


/*
function addItem() {
	let li = document.createElement('li');
	let text = li.innerHTML = newName;
	ulist.appendChild(li);
}
*/

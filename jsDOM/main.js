// Defining variables
let input = document.getElementById("input");
let output = document.getElementById("output");
let listHeading = document.getElementById("listHeading");
//console.log(input.value);
function clear(){
	document.getElementById('input').value="";
}

//function to show or hide list header
function header() {
	if (output.innerHTML === ""){
	listHeading.innerHTML ="";
} else {
	listHeading.innerHTML ="<h3> Capitalized names: </h3>";
}
}

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
})



// Javascript Solution to using enter key
/*document.onkeypress = function (e) {
	if (e.keyCode === 13) {
		capitalize();
	}
}*/




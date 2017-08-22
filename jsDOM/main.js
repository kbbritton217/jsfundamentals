let input = document.getElementById("input");
let output = document.getElementById("output");
//console.log(input.value);

function capitalize() {
	let newName = "";

	for (let l in input.value) {
		if (l == 0) {
			newName = input.value[l].toUpperCase();
		} else {
			newName += input.value[l].toLowerCase();
		}
	}

	output.innerHTML = 'Capitalized name: ' + newName;
}
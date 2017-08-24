$(document).ready(function(){
	$.ajax({
		type: 'GET',
		url: 'http://swapi.co/api/planets/',
	}).done(function(data){
		console.log(data.results);
		planets = data.results

		planets.forEach(function(planet){
			let tr = document.createElement('tr')
			let td = document.createElement('td')

			td.innerHTML = planet.name
			$(planetTable).append(tr).append(td)
		})
	}) 

	$.ajax({
		type: 'GET',
		url: 'https://swapi.co/api/starships/',
	}).done(function(ships){
		console.log(ships.results);
		ship = ships.results

		ship.forEach(function(starship){
			let tr = document.createElement('tr')
			let td = document.createElement('td')

			td.innerHTML = starship.name
			$(shipTable).append(tr).append(td)
		})
	}); 

	$.ajax({
		type: 'GET',
		url: 'https://swapi.co/api/people/',
	}).done(function(people){
		console.log(people.results);
		person = people.results

		function personFilm() {
			for (k in person.name){
				if (input.toLowerCase === k.toLowerCase){
					let hd = document.createElement('h3')
					Film = people.results[k].films
					ouput.innerHTML = $(Film).append(hd)
				}
			}
			}
		})
	// jQuery Solution to using enter key
		$('input').keyup(function (e) {
			if (e.keyCode === 13) {
				personFilm();
			}
		})

	}); 


		// for (let g in person){
		// 	if (input === person[g]){
		// 		ouput.innerHTML = people.results.films//should equal films, be sure to create html elements
		// 	}

		// 	function personFilm() {
		// 	let newName = "";

		// 	for (let l in input.value) {
		// 		if (l == 0) {
		// 			newName = input.value[l].toUpperCase();
		// 		} else {
		// 			newName += input.value[l].toLowerCase(); 
		// 		} 
		// 	}
		// 	output.innerHTML += '<li>' + newName + '</li>';
		// }

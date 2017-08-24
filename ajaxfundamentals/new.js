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
		person = people.results.name

		person.forEach(function(Film){
			let hd = document.createElement('h3')
			ouput.innerHTML = people.results.films
			$(output).append(hd)
		})

		// jQuery Solution to using enter key
		$('input').keyup(function (e) {
			if (e.keyCode === 13) {
				Film();
			}
		})
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

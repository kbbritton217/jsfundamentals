//Objects

// let food = {
// 	pies: ['Pecan', 'Blueberry', 'Apple', 'Cherry', 'Key Lime'],
// 	pieNames: [],
// 	getPies: function() {
// 		console.log(this)
// 		return this.pies;
// 	},

// 	pieType: function(){
// 		this.pies.forEach( function(pie) {
// 			return pie + " pie";
// 		});
// 	}
// 	food.pieNames.push(pieType);
// 	} 


// console.log(food.pieNames);



let food = {
	pies: ['Pecan', 'Blueberry', 'Cherry', 'Key Lime'],
	pieNames: [],
	getPies: function(){
		console.log(this)
		return this.pies; //food object
	},
	addPie: function() {
		return food.pies.forEach(function(newP) {
			console.log(newP + " pie")})
	},
	getPieNames: function(){
		this.pies.forEach(function(pie){
			//console.log(pie)
			//console.log(food.pieNames)
			food.pieNames.push(pie + ' pie');
		})
		return this.pieNames
	}
}
console.log(food.getPieNames());

//this.getPies();

// food.pies.forEach( function(pie) {
// 	console.log( pie + " pie");
// });

/* Explanation..the parameter passed into the function is automatically each item in the array due to ".forEach"
let newArr = ['a','b','c','d']

newArr.forEach(function(letter){
	console.log(letter)
})*/
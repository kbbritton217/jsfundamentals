let $friends = $('#friends');
let $name = $('#name');
let $age = $('#age');

let friendTemplate = "" +
	"<li>" +
	"<p><strong>Name:</strong>{{name}}</p>" +
	"<p><strong>Age:</strong> {{age}}</p>" +
	"<button id='{{id}}' class='remove'>X</button>" +
	"</li>";

	function addFriend(friend){
		$friends.append(Mustache.render(friendTemplate, friend));
	};

$(document).ready(function(){

	$.ajax({
		type: 'GET',
		url: 'http://rest.learncode.academy/api/learncode/javascriptfall',
		success: function(friends) {
			$.each(friends, function(i, friend){
				addFriend(friend);
			});
		},
		error: function(){
			alert('error loading friends');
		}
	});
	$('#add-friend').on('click', function(){
		var friend = {
			name: $name.val(),
			age: $age.val()
		};
		$.ajax({
			type: 'POST',
			url: 'http://rest.learncode.academy/api/learncode/javascriptfall',
			data: friend,
			success: function(newFriend){
				addFriend(newFriend);
			},
			error: function(){
				alert('error saving order')
			}
		});
	});

});

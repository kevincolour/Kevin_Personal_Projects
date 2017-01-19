

$(document).ready(function(){
	var random_number = generate_random_numbers();
	console.log(random_number);

	$("#answer").click(function(){

		if ($("#answer_input").val() == random_number){
			$("body").append("<p id = 'win_lose'> YOU WIN </p>");
		}
		else{
			$("body").append("<p id = 'win_lose'> YOU LOSE. REFRESH TO PLAY AGAIN </p>");
		}
	})

	$("#guess").click(function(){
		var value = $("#guess_input").val();
		var guess = value.toString();
		if (guess.length != 4){
			console.log("error");
			alert("error, need to input 4digits");
			return;
		}
		else{

			/* the codee in this section is.. qquestionable at best. too many lines used */
			var the_count = "";
			var random_number_string = random_number.toString();
			var first_dig = guess[0];
			var second_dig = guess[1];
			var third_dig = guess[2];
			var fourth_dig = guess[3];

			the_count += generate_ball_or_strike(random_number_string, first_dig, 0);
			the_count += generate_ball_or_strike(random_number_string, second_dig, 1);
			the_count += generate_ball_or_strike(random_number_string, third_dig, 2);
			the_count += generate_ball_or_strike(random_number_string, fourth_dig, 3);

			console.log(the_count);
			$("#container").append("<p>" + guess + "-----" + the_count + "</p>");
		}
	})
})

function generate_ball_or_strike(random_number_string, digit, index){
	if (random_number_string.indexOf(digit) > -1){
		if (random_number_string[index] === digit){
			return "S";
		}
		else{
			return "B";
		}
	}
	else{
		return "";
	}
 
}	


function generate_random_numbers(){
	var already_used_arr = [];
	var number_string = ""; //pretty horrid redundancy here... should have just checked if element is in strnig not made an array variable

	while (already_used_arr.length < 4){
		var random_number = Math.floor(Math.random() * 10);
		if ($.inArray(random_number, already_used_arr) === -1){
			
			already_used_arr.push(random_number);
			number_string += random_number;
		}
	}
	return parseInt(number_string);
}
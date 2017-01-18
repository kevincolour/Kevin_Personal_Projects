

$(document).ready(function(){
	var first_number = 0;
	var second_number = 0;
	var operation;
	var true_answer;
	var current_values_arr = []


	$("button").click(function(){
		$("#answer").html("");
		first_number = 0;
		second_number = 0;
		current_values_arr = []
	});
	
    $(".box").click(function(){
    	var kevin_id = $(this).attr('id');
        var number = get_id_number(kevin_id);

        if (number >= 0) {
        	current_values_arr.push(number);
        	$("#answer").append(number);
        } else if (number === -1 || number === -2 || number ===-3){

        	append_operation(number);

        	var number_string = "";
        	for (e in current_values_arr){
        		number_string += current_values_arr[e];
        		}
        	var parsed_number =	parseInt(number_string);

        	if (first_number != 0) {//if the first number ahs a value, then we're on the second value.
        		second_number = parseInt(number_string);
        	}
        	else {
        		first_number = parsed_number;
        	} 
        	if (number != -3){ //dirty,dirty hack.
        		operation = number;
        	}
        	current_values_arr = []; //reset the number so the second number can be evaluated
        } 
        	if (first_number != 0 && second_number != 0){
        		if ( operation === -1) {//addition					
					true_answer = first_number + second_number;
        		} else{
        			true_answer = first_number - second_number;
        		}
        	}

        $("#answer").html(true_answer);
        true_answer = undefined;


    });
});


function append_operation(number){
	//number eher is -1 or -2, -1 === additionn. -2 === subtraction
 	
	if (number === -1){
		$("#answer").append(" + ");	
	}
	else {
		$("#answer").append(" - ");
	}
}

function get_id_number(kevin_id){
	var kevin_id_number;
	switch (kevin_id)
	{

	case 'one' : kevin_id_number = 1;
	break;

	case 'two' : kevin_id_number = 2;
	break;

	case 'three' : kevin_id_number =3;
	break;

	case 'four' : kevin_id_number = 4;
	break;

	case 'five' : kevin_id_number = 5;
	break;

	case 'six' : kevin_id_number = 6;
	break;

	case 'sevem' : kevin_id_number = 7;
	break;

	case 'eight' : kevin_id_number = 8;
	break;

	case 'nine' : kevin_id_number = 9;
	break;

	case 'zero_button' : kevin_id_number = 0;
	break;

	case 'plus_button' : kevin_id_number = -1;
	break;

	case 'minus_button' : kevin_id_number = -2;
	break;

	case 'equal_button' : kevin_id_number = -3;
	break;

	default: kevin_id_number = 0
	}

	return kevin_id_number;
}
	


{}
''
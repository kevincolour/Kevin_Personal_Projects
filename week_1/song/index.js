

/* the BELOW is not my code. SRC : http://stackoverflow.com/questions/10041723/how-to-embed-audio-within-a-website */

/*  // decided to use html5 tag instead of this javascript stuff.
console.log("Dfas");
$(document).ready(function(){
var aud = document.createElement("iframe");
aud.setAttribute('src', "./misc/all_of_me_john_legend.mp3"); // replace with actual file path
aud.setAttribute('width', '232px');
aud.setAttribute('height', '232px');
aud.setAttribute('scrolling', 'no');
aud.style.border = "0px";
$('#container').append(aud);
console.log(aud);

})
*/
/* the ABOVE is not my code. SRC : http://stackoverflow.com/questions/10041723/how-to-embed-audio-within-a-website */
$(document).ready(function(){
	var kevin_song = document.getElementById("kevin_audio")	; //should be using jquery here not javascript
	var artist_song = document.getElementById("artist_audio")	; //should be using jquery here not javascript
	$("#song_button").click(function(){
		kevin_song.play();
		artist_song.play();
	})
	$("#pause_button").click(function(){
	kevin_song.pause();
	artist_song.pause();

	})
	$("#k_volume_increase").click(function(){
	if (kevin_song.volume < .90){
		var new_volume = kevin_song.volume + 0.1;
		kevin_song.volume = new_volume; 
		console.log(new_volume);
		}
	})
	$("#k_volume_decrease").click(function(){

	if (kevin_song.volume > 0.11){	
		var new_volume = kevin_song.volume - 0.1;
		kevin_song.volume = new_volume; 
		console.log(new_volume);
		}
	})

})
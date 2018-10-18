$( document).ready(function(){

	var emojiMedium = ["emojis/tv.png","emojis/film.png"];
	var emojiMood = ["emojis/cry.png","emojis/gross.png","emojis/laugh.png","emojis/sleep.png","emojis/sob.png"];
	var emojithird = ["emojis/cry.png","emojis/gross.png","emojis/laugh.png","emojis/sleep.png","emojis/sob.png","emojis/tv.png","emojis/film.png"];
	var moodCount = emojiMood.length;
	var mediaCount = emojiMedium.length;
	var thirdCount = emojithird.length;
	var moodTicker = 0;
	var mediumTicker = 0;
	var thirdTicker = 0;
	
	console.log("testing");

	//SELECTING MEDIA EMOJI

	$('.cat1').mousedown(function(e){
		selectMedia();	
	});

		function selectMedia() {
		var type = emojiMedium[mediumTicker];
		$("#medium").attr("src", type);
		mediumTicker += 1;
		if (mediumTicker > mediaCount - 1) {
			mediumTicker = 0;
		}
	}	

	//SELECTING MOOD EMOJI

	$('.cat2').click(function(e){
		selectMood();		
	});

	function selectMood() {
		var url = emojiMood[moodTicker];
		$("#mood").attr("src", url);
		moodTicker += 1;
		if (moodTicker > moodCount - 1) {
			moodTicker = 0;
		}
	}

	//SELECTING THIRD THING

	$('.cat3').click(function(e){
		selectThird();		
	});

	function selectThird() {
		var three = emojithird[thirdTicker];
		$("#third").attr("src", three);
		thirdTicker += 1;
		if (thirdTicker > thirdCount - 1) {
			thirdTicker = 0;
		}
	}



























});
$( document).ready(function(){

	var emojiMedium = ["emojis/tv.png","emojis/film.png"];
	var emojiMood = ["emojis/cry.png","emojis/gross.png","emojis/fear.png","emojis/sleep.png","emojis/love.png","emojis/adventure.png","emojis/think.png","emojis/big.png","emojis/dark.png","emojis/laugh.png",];
	var moodCount = emojiMood.length;
	var mediaCount = emojiMedium.length;
	var moodTicker = 0;
	var mediumTicker = 0;

	//SELECTING MEDIA EMOJI

	$('.cat1').mousedown(function(e){
		var type = emojiMedium[mediumTicker];

		$("#medium").attr("src", type);
		mediumTicker += 1;
		if (mediumTicker > mediaCount - 1) {
			mediumTicker = 0;
		}
	});	

	//SELECTING MOOD EMOJI

	$('.cat2').click(function(e){
		var url = emojiMood[moodTicker];

		$("#mood").attr("src", url);
		moodTicker += 1;
		if (moodTicker > moodCount - 1) {
			moodTicker = 0;
		}
	});

	//RECOMMEND ME A THING

	$('#go').mousedown(function(e){
		$(".cat1").addClass("hide");
		$(".cat2").addClass("hide");
		$(".cat3").addClass("hide");
		$(".show").removeClass("hide");
		$(".again").removeClass("hide");
		thisMovie();
	});

	function thisMovie() {
		var movieNumber = moodTicker;
		var tvNumber = moodTicker;

		if (mediumTicker >= 1) {
			$("#name").html(testTV[tvNumber]["Title"]);
			$(".picture").attr("src", testTV[tvNumber]["image"]);
		}
		else {
			$("#name").html(testSubjects[movieNumber]["Title"]);
			$(".picture").attr("src", testSubjects[movieNumber]["image"]);
		}
	}










});
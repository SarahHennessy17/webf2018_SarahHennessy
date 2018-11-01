$( document).ready(function(){

	var emojiMedium = ["emojis/tv.png","emojis/film.png"];
	var emojiMood = ["emojis/cry.png","emojis/gross.png","emojis/fear.png","emojis/sleep.png","emojis/love.png","emojis/adventure.png","emojis/think.png","emojis/big.png","emojis/dark.png","emojis/family.png","emojis/laugh.png"];
	var moodChoice = ["laugh", "cry", "gross", "fear", "sleep", "love", "adventure", "think", "big", "dark", "family"];
	var moodCount = emojiMood.length;
	var mediaCount = emojiMedium.length;
	var moodTicker = 0;
	var mediumTicker = 0;

	// test

	// console.log(tvData[11]["Title"], movieData[10]["Title"]);

	// Remove Guide

	function timer() {
  	$(".guide").addClass("hide");
	// $("#go").removeClass("hide");
	}

	window.setInterval(timer, 10000);

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

	//AGAIN

	$('.again').click(function(e){
		$(".cat1").removeClass("hide");
		$(".cat2").removeClass("hide");
		$(".cat3").removeClass("hide");
		$(".meta").addClass("hide");
		$(".link").addClass("hide");
	});

	//SHOW METADATA

	$('.frontpic').mouseover(function(e){
		$(".meta").removeClass("hide");
	});

	$('.frontpic').mouseout(function(e){
		$(".meta").addClass("hide");
	});

	//RECOMMEND ME A THING

	$('#go').mousedown(function(e){
		$(".cat1").addClass("hide");
		$(".cat2").addClass("hide");
		$(".cat3").addClass("hide");
		$(".show").removeClass("hide");
		$(".again").removeClass("hide");
		$(".link").removeClass("hide");
		thisMovie();
	});

	function thisMovie() {
		var movieNumber = [Math.floor(Math.random() * movieData.length)];
		var tvNumber = [Math.floor(Math.random() * tvData.length)];
		var pickMood = moodChoice[moodTicker];
		var tvChosenMood = tvData[tvNumber]["Mood"];
		var movieChosenMood = movieData[movieNumber]["Mood"];

		//good for single
		if (tvChosenMood == pickMood && mediumTicker >= 1) {
			console.log("you did it with" + tvData[tvNumber]["Title"]);
			$("#name").html(tvData[tvNumber]["Title"]);
			$("#director").html(tvData[tvNumber]["Directors"]);
			$("#genre").html(tvData[tvNumber]["Genres"]);
			$("#year").html(tvData[tvNumber]["Year"]);
			$(".picture").attr("src", tvData[tvNumber]["image"]);
			$(".frontpic").attr("src", tvData[tvNumber]["image"]);
				$('.show').click(function(e){
					$(".link").attr("href", tvData[tvNumber]["URL"]);
				});
		}
		else if (movieChosenMood == pickMood && mediumTicker == 0) {
			$("#name").html(movieData[movieNumber]["Title"]);
			$("#director").html(movieData[movieNumber]["Directors"]);
			$("#genre").html(movieData[movieNumber]["Genres"]);
			$("#year").html(movieData[movieNumber]["Year"]);
			$(".picture").attr("src", movieData[movieNumber]["picture"]);
			$(".frontpic").attr("src", movieData[movieNumber]["picture"]);
				$('.show').click(function(e){
					$(".link").attr("href", movieData[movieNumber]["URL"]);
				});
			}
		else {
			thisMovie();
		}
	}



});
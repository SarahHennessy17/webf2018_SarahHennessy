$( document).ready(function(){

console.log("Ready to go!");

var i = 0;
var ticker = 0;
var count = text.length;
var scriptPick = text[ticker]["txt"];
var scriptType = text[ticker]["type"];
var speed = 50;
var typeSound = new Audio("sound/type.mov");

// console.log(scriptPick, scriptType, ticker);

function typeWriter() {
    var scriptPick = text[ticker]["txt"];
    var scriptType = text[ticker]["type"];
    // console.log(scriptPick, scriptType, ticker);
    i++; 

    $("#type").append("<p class='typewriter " + scriptType + "''>" + scriptPick + "</p>");
    typeEffect();
    setTimeout(removeType, 7000);
}

function removeType() {
   $("p").removeClass("typewriter");
   typeSound.pause();
   typeSound.currentTime = 0;
}

function typeEffect() {
	typeSound.play();
}

function pageScroll() {
    window.scrollBy(0,1);
    scrolldelay = setTimeout(pageScroll,10);
	}


$('.button').mousedown(function(e){
	$(".title").css("opacity", "0");

	ticker++;

	if (ticker >= count){
     setTimeout(location.reload.bind(location), 1000);
    }

	typeWriter();
	pageScroll();
	});









});
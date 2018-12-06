$( document).ready(function(){

console.log("Ready to go!");

var i = 0;
var ticker = 0;
var count = text.length;
var scriptPick = text[ticker]["txt"];
var scriptType = text[ticker]["type"];
// var txt = 'A designer, Sarah Hennessy, 22, a senior at Parsons School of Design waves to the reader.';
// var slug = "IINT. OFFICE - DAY";
var speed = 50;
var typeSound = new Audio("sound/type.mov");

// console.log(scriptPick, scriptType, ticker);

function typeWriter() {
    var scriptPick = text[ticker]["txt"];
    var scriptType = text[ticker]["type"];
    // console.log(scriptPick, scriptType, ticker);
    i++; 

    $("#type").append("<p class='typewriter " + scriptType + "''>" + scriptPick + "</p>");

}

function typeEffect() {
	typeSound.play();
}

function pageScroll() {
    window.scrollBy(0,1);
    scrolldelay = setTimeout(pageScroll,10);
	}

// 	function pageScroll() {
//         window.scrollBy(0,50); // horizontal and vertical scroll increments
//         scrolldelay = setTimeout(pageScroll, 100); // scrolls every 100 milliseconds
// }

$('button').mousedown(function(e){
	$(".title").css("opacity", "0");
	
	ticker++;

	if (ticker >= count){
      ticker = 0;
    }

	typeWriter();
	pageScroll();
	});


});
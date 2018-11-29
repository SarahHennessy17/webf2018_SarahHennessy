$( document).ready(function(){

console.log("testing");

var i = 0;
var ticker = 0;
var count = text.length;
var scriptPick = text[ticker]["txt"];
var txt = 'A designer, Sarah Hennessy, 22, a senior at Parsons School of Design waves to the reader.';
var slug = "IINT. OFFICE - DAY";
var speed = 50;
var typeSound = new Audio("sound/type.mov");


function typeSlug() {
	document.getElementById("slug").innerHTML += slug.charAt(i);
	
    setTimeout(typeSlug, speed, typeEffect);
}


function typeWriter() {
    document.getElementById("text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed, typeEffect);
}

function typeEffect() {
	typeSound.play();
}

$('button').mousedown(function(e){
	$(".title").css("opacity", "0");
	ticker++;
	console.log(ticker);

	if (ticker >= count){
      ticker = 0;
    }

	typeWriter();
	typeSlug();
	});


});
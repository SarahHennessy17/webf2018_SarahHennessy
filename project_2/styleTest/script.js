$( document).ready(function(){

console.log("testing");

	var objectNumber = 0;//NUMBER PICKED FROM THE TICKER
	count = portfolioPieces.length;

$('.demo').mousedown(function(e){
	// console.log(portfolioPieces[objectNumber]["title"]);

	objectNumber += 1;
	if (objectNumber > count - 1) {
			objectNumber = 0;
		}

	$(".name").html(portfolioPieces[objectNumber]["title"]);
	$(".picture").attr("src", portfolioPieces[objectNumber]["img"]);
	console.log(portfolioPieces[objectNumber]["img"]);
	});
















});
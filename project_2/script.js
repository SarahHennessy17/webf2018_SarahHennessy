$( document).ready(function(){

console.log("testing");

	var objectNumber = 0;//NUMBER PICKED FROM THE TICKER
	count = portfolioPieces.length;

$('body').mouseup(function(e){	
	$('body').css('background-color', 'white');
	$('.name').css('color', 'black');
	});

$('.demo').mouseup(function(e){
	// console.log(portfolioPieces[objectNumber]["title"]);

	objectNumber += 1;
	if (objectNumber > count - 1) {
			objectNumber = 0;
		}

	$(".name").html(portfolioPieces[objectNumber]["title"]);
	// $(".picture").attr("src", portfolioPieces[objectNumber]["img"]);
	$(".video").attr("src", portfolioPieces[objectNumber]["video"]);
	// console.log(portfolioPieces[objectNumber]["img"]);
	});

// slider.oninput = function() {
//   output.innerHTML = this.value;
//   var pickedNumber = this.value;
//   var counter = this.value;
//   var portfolioPick = portfolioPieces[pickedNumber];
        
//     $(".name").html(portfolioPick["title"]);
// 	// $(".picture").attr("src", portfolioPieces[objectNumber]["img"]);
// 	$(".video").attr("src", portfolioPick["video"]);
// }




});
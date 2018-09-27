$( document).ready(function(){

	console.log("hey")

	$('#oval').css('background-color','black');

	$('#triangle').mousedown(function(){
		$('#triangle').css('border-bottom','0vw solid tan');
		$('#triangle').css('border-top','20vw solid tan');
	});

	$('#cross').mouseenter(function(){
		$('#cross').css('transform','rotate(180deg');
	});

	$('#cross').mouseleave(function(){
		$('#cross').css('transform','rotate(0deg');
	});

	$('#mouseY').mousemove(function(e){
		var parentOffset = $('#lineX').parent().offset();
		var relY = e.pageY - parentOffset.top + 1;
		$('#lineX').css('top',relY);
	});

	$('#mouseX').mousemove(function(e){
		var parentOffset = $('#lineY').parent().offset();
		var relY = e.pageX - parentOffset.left + 1;
		$('#lineY').css('left',relY);
	});


	$('body').mousemove(function(e){
	
		$('#dot').css({
			left: e.pageX,
			top: e.pageY
		});


	});





});
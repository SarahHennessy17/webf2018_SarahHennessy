$( document).ready(function(){

	console.log("testing");


// Lightsabers follow mouse

	$('#bad').mousemove(function(e){
		
		$('#red').css({
			left: e.pageX,
			top: e.pageY
		});
	});

	$('#good').mousemove(function(e){
		
		$('#blue').css({
			left: e.pageX,
      top: e.pageY
		});
	});

  $('div').mousemove(function(e){
    
    $('.explosion').css({
      left: e.pageX,
      top: e.pageY
    });
  });

// Lightsabers sound when clicked

  var saberOn = new Audio("sounds/saber_on.mp3");
  var saberOff = new Audio("sounds/saber_off.mp3");
  
  $('#vader').click(e => saberOn.play());
  $('#obi').click(e => saberOn.play());

// Lightsabers sound in middle

var saberSound = new Audio("sounds/saber_hold.mp3");

$("#divide").mouseenter(function() {
  saberSound.play();
});

$("#divide").mouseleave(function() {
  saberSound.pause(4000);
});

// the light when you click

$(document).mousedown(function(e) {
  var elem = $('<div class="light"></div>').appendTo('body');
  var mouseX = e.pageX - 200;
  var mouseY = e.pageY - 240;
  elem.css('top', mouseY);
  elem.css('left', mouseX);
  setTimeout(function() {
    elem.remove();
  }, 100)
});

// spin

$('#blue').on( "dblclick", function(e) {

  var saberSwing = new Audio("sounds/saber_swing.m4a");
  
  saberSwing.play();
  $('#blue').css({'transform' : 'rotate('+ 379 +'deg)'});

  console.log("spinnn");
});

$(function(){
    n = -379;
    $('#red').on('dblclick', function(){
        $(this).css({
            'transform':'rotate('+n+'deg)',
            '-ms-transform':'rotate('+n+'deg)',
            '-moz-transform':'rotate('+n+'deg)',
            '-o-transform':'rotate('+n+'deg)'
        });
        n-=360;
    });
});






// STARS 

function addStars() {
  var randomStars = Math.random()*100;
  $("#stars").append("<div class='stars'></div>");
  // console.log(randomStars)
}

function starSpace() {
  var starsHeight = Math.random()*1000;
  var starsWidth = Math.random()*1000;

  $('.stars').css('margin-right',starsHeight);
  $('.stars').css('margin-top',starsHeight);

}

window.setInterval(function() {
    addStars();
    starSpace();
  }, 600);
















});
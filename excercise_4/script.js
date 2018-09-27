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

// explosion

$(document).mousedown(function(e) {
  var elem = $('<div class="click-explosion"></div>').appendTo('body');
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

$('#red').on( "dblclick", function(e) {
  var saberSwing = new Audio("sounds/saber_swing.m4a");
  
  saberSwing.play();
  
  $('#red').css({'transform' : 'rotate('+ 341 +'deg)'});

  console.log("spinnn");
});








// Lightsabers touching? true/false

// 	function collision($vader, $obi) {
//       var l1 = $vader.offset().left;
//       var top1 = $vader.offset().top;
//       var h1 = $vader.outerHeight(true);
//       var w1 = $vader.outerWidth(true);
//       var add1 = top1 + h1;
//       var add2 = l1 + w1;
//       var l2 = $obi.offset().left;
//       var top2 = $obi.offset().top;
//       var h2 = $obi.outerHeight(true);
//       var w2 = $obi.outerWidth(true);
//       var add3 = top2 + h2;
//       var add4 = l2 + w2;

//       if (add1 < top2 || top1 > add3 || add2 < l2 || l1 > add4) return false;
//       return true;
//     } 

// window.setInterval(function() {
//     $('#result').text(collision($('#red'), $('#blue')));}, 20);
// });


// STARS $("#balloon-container").append("<div class='balloon'></div>");

















});
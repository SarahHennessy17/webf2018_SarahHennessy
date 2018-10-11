$( document).ready(function(){

	console.log("testing");

// Lightsabers follow mouse

function mouseTime() {

	$('#good').mousemove(function(e){
		
		$('#blue').css({
			left: e.pageX,
      top: e.pageY
		});
	});
}

mouseTime();

// Lightsabers sound when clicked

  var saberOn = new Audio("sounds/saber_on.mp3");
  var saberOff = new Audio("sounds/saber_off.mp3");

  $('#obi').click(e => saberOn.play());

// the light when you click

$(document).mousedown(function(e) {
  var blast = $('<div class="light"></div>').appendTo('body');
  var mouseX = e.pageX - 200;
  var mouseY = e.pageY - 240;
  blast.css('top', mouseY);
  blast.css('left', mouseX);
  setTimeout(function() {
    blast.remove();
  }, 100)
});

// spin

$(function(){
    bluen = 379;
    $('#blue').on('dblclick', function(){
        $(this).css({
            'transform':'rotate('+bluen+'deg)',
            '-ms-transform':'rotate('+bluen+'deg)',
            '-moz-transform':'rotate('+bluen+'deg)',
            '-o-transform':'rotate('+bluen+'deg)'
        });
        bluen-=360;
    });
});

//LET THE GAME BEGIN
       $("#laser").css("-webkit-animation-play-state", "paused");

        $('input[type="checkbox"]').click(function(){
            if($(this).prop("checked") == true){
                setInterval(function(){
                    positionRandomly();
                    $("#laser").css("-webkit-animation-play-state", "running");
                    $("#laser").removeClass("hide");
                    $("#start").addClass("hide");
                    }, 1000)}
        });


// STARS 

function addStars() {
  var randomStars = Math.random()*100;
  $("#stars").append("<div class='stars'></div>");
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
  }, 300);

// TRAINING REMOTE

var divs = $('.remote');
var winWidth = $('#bad').innerWidth;
var winHeight = window.innerHeight;

// taken out so that saber igniting can start game

// setInterval(function(){
//       positionRandomly();
// }, 1000)

function addMore( object, container ) {
  container.append( object );
}

function positionRandomly() {

  for ( var i=0; i < divs.length; i++ ) {

      var thisDiv = divs[i];

      randomTop = getRandomNumber(0, winHeight - 80);
      randomLeft = getRandomNumber(0, winWidth);

      thisDiv.style.top = randomTop +"px";
      thisDiv.style.left = randomLeft +"px";

  }
}

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

//LASER HIT SABER

  $('#laser').mouseenter(function(e){
    removeLaser();
    saberHit();
  });


// ATTEMPT TO MAKE IT USE THE SABER

  // function hitLaser() {
  //   var saberSpot = $(".plasma").offset();
  //   var laserSpot = $("#laser").offset();

  //   console.log( "saber left:" + saberSpot.left, "saber top:" + saberSpot.top, "laser left:" + laserSpot.left, "laser top:" + laserSpot.top);

  //   if (saberSpot == laserSpot) {
  //     removeLaser();
  //     saberHit();
  //   }
  // }

  //   setInterval(function(){
  //    hitLaser();
  //   }, 600)


function removeLaser() {
  $("#laser").addClass("hide");
    setInterval(function(){
      $("#laser").removeClass("hide");
    }, 600)
}

//score

  var ticker = 0;

  function saberHit() {

    $('#score').text((ticker + 1));
    ticker += 1;

    var saberHit = new Audio("sounds/laser_hit.m4a");
    saberHit.play();

    if (ticker >= 2){
      youWin();
    }

    }

// YOU LOSE

function youLose() {
  clearInterval(findLaser);
  $("#loser").removeClass("hide");
  $(".veil").removeClass("hide");
  $("#good").addClass("hide");
  $("#score").addClass("hide");
  $(".final").text("FINAL SCORE : " + ticker);
  darkSound();
  }
  
function darkSound() {
  var dark = new Audio("sounds/darkWins.mp3");
  dark.play();
}

// YOU WIN

function youWin() {
  clearInterval(findLaser);
  $("#win").removeClass("hide");
  $(".veil").removeClass("hide");
  $("#good").addClass("hide");
  $(".remote").addClass("hide");
  $("#score").addClass("hide");
  $(".final").text("FINAL SCORE : " + ticker);
  themeSound();
  }

function themeSound() {
  var theme = new Audio("sounds/winner.mp3");
  theme.play();
}

// CHECK IF LASER WENT PAST YOU

 function laserWhere() {

  var laserLocation = $("#laser").offset();
  var laserleft = laserLocation.left;
  
  if (laserleft <= -100)
    youLose();
 }


var findLaser = setInterval(function(){laserWhere();}, 600);

setTimeout(fade_out, 2000);

function fade_out() {
 $("#start").text("IGNITE SABER TO BEGIN");
}




});
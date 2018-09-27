
  $('#vader').click(e => saberOff.play());
  $('#obi').click(e => saberOff.play());


  var checkBox = document.getElementById("vader");
  const saberOn = new Audio("sounds/saber_on.mp3");
  const saberOff = new Audio("sounds/saber_off.mp3");

  if (checkBox.checked == true){
    $('#vader').click(e => saberOff.play());
  } 





var space = $('body');
var winWidth = window.innerWidth;
var winHeight = window.innerHeight;
var starAmount = Math.random()*150;

  positionRandomly();
  addMore();

    function positionRandomly() {
   
      for ( var i=0; i < space.length; i++ ) {

      // shortcut! the current div in the list
      var thisDiv = space[i];

      // get random numbers for each element
      randomTop = getRandomNumber(0, winHeight);
      randomLeft = getRandomNumber(0, winWidth);

      // update top and left position
      thisDiv.style.top = randomTop +"px";
      thisDiv.style.left = randomLeft +"px";
      }
    }

  setInterval(function(){
    $('stars').addClass('stars'); 
        addMore();
        positionRandomly();
    }, 5000)

  function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
    }

  function addMore() {
    // $('#good').addClass('.stars');
    positionRandomly();
    }







  function getStars() {

     var starHeight = Math.random()*550;
     var starWidth = Math.random()*700;
     console.log(starHeight, starWidth);

    $('.stars').css('top', starHeight);
    $('.stars').css('left', starWidth);
  }

  function addStars() {
      
      var starAmount = Math.random()*150;

      $('#bad').addClass('.stars');
      getStars();
  }

  addStars();





  function saberClash() {
    if collision() == true;
      var saberClash = new Audio("sounds/saber_hold.mp3");
      saberClash.play();
      console.log("SOUND");
  }
      saberClash();



      
// Lightsabers touching? true/false

var saber = $(".plasma");
// var badSaber = $(".red");
var position = saber.position();
// var badPosition = badSaber.position();


function saberPosition(){
  $( "#result" ).text( "left: " + position.left + ", top: " + position.top );
};

setInterval(function(){
      saberPosition();
    }, 1000)












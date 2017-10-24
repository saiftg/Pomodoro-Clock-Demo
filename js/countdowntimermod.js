
console.log("test")
var workLength = 25;
var playLength = 5;
var alarm = new Audio('http://www.orangefreesounds.com/wp-content/uploads/2016/06/Ringing-clock.mp3?_=1');
var loop = 0;
var clicks = 0;

$('#stop').hide();
$('#resume').hide();


function addWorkTime(){//to add time to work session
  workLength += 5;
  $('.minutes').text(workLength);
  $('.minutes-interval').text(workLength);
}

function deductWorkTime(){//to deduct session time
  if (workLength > 5){
    workLength -= 5 //logic to prevent going below 5 on time scale.
  }else{
    workLength = 5;
  }
  var p = workLength.toLocaleString(undefined,{minimumIntegerDigits: 2})
  $('.minutes').text(p);
  $('.minutes-interval').text(p);
}


function addPlayTime(){
  playLength += 5;
  $("#playTimer").text(playLength);
}

function deductPlayTime(){
  if (playLength > 5){
    playLength -= 5
  }else{
    playLength = 5
  }
  $("#playTimer").text(playLength);
}


function userInput(){
  console.log(workLength);
  timerWork(workLength)
  $('#break').hide();
}


function stopAudio(audio) {
    audio.pause();
    audio.currentTime = 0;
}

//then using it:

function timerWork(limit,secs){
  $('#start').hide();
  // $('#reset').hide();
  $('#stop').show();

  // $('#reset').attr('disabled', true);
  var seconds = 60 //0;
  var minutes = limit - 1;//0;
 

 $('#stop').click(function(){
      console.log("supppp");
      clearInterval(interval);
      console.log(minutes,seconds);
      $('#stop').hide();
      $('#resume').show();
      $('#reset').show();
      // return minutes
      // return seconds
      console.log(document.getElementsByClassName('minutes')[0].value);
      var xx = document.getElementsByClassName('minutes')[0].value;
      var yy = document.getElementsByClassName('seconds')[0].value;
      
      $('#resume').click(function(){
     
      console.log("REEEEEEMIX");
      $('#resume').hide();

      timerWork(xx,yy);
 })
    });

 

  var interval = setInterval(function(){
    if (seconds > 0){
    seconds -= 1;
    }else if (seconds === 0 && minutes > 0){
      minutes -= 1;
      seconds = 60;
    }else if (seconds === 0 && minutes === 0){
        clearInterval(interval);
        // return minutes;
        // $('#reset').attr('disabled', false);
        $('#reset').show();
        $('#break').show();

        timerBreak(playLength);
      }
  document.getElementsByClassName('minutes')[0].style.fontSize = "125px";
  document.getElementsByClassName('seconds')[0].style.fontSize = "125px";
  document.getElementsByClassName('minutes')[0].innerHTML = minutes.toLocaleString(undefined,{minimumIntegerDigits: 2});//converts the seconds to double digits;
  document.getElementsByClassName('seconds')[0].innerHTML = seconds.toLocaleString(undefined,{minimumIntegerDigits: 2});//converts the seconds to double digits;;
  console.log(minutes, seconds);
  }, 500)

  
  // $('#break').show();

 };



 function timerBreak(limit){
  var seconds = 60 //0;
  var minutes = limit - 1;//0;

 
  $('#stop').click(function(){
      console.log("supppp");
      clearInterval(interval);
      console.log(minutes,seconds);
    });



  var interval = setInterval(function(){
    if (seconds > 0){
    seconds -= 1;
    }else if (seconds === 0 && minutes > 0){
      minutes -= 1;
      seconds = 60;
    // }else if (minutes === 0 && seconds <= 15){
    //   alarm.play();
    }else{
        clearInterval(interval);
        // return minutes;
        timerWork(workLength);
        $('#break').hide();
        // stopAudio(alarm);

      }
  document.getElementsByClassName('minutes')[0].style.fontSize = "125px";
  document.getElementsByClassName('seconds')[0].style.fontSize = "125px";
  document.getElementsByClassName('minutes')[0].innerHTML = minutes.toLocaleString(undefined,{minimumIntegerDigits: 2});//converts the seconds to double digits;
  document.getElementsByClassName('seconds')[0].innerHTML = seconds.toLocaleString(undefined,{minimumIntegerDigits: 2});//converts the seconds to double digits;;
  console.log(minutes, seconds);
  }, 20)

  
 };

 function stop(){

  

  };




function reset(){
  document.getElementsByClassName('minutes')[0].innerHTML = workLength.toLocaleString(undefined,{minimumIntegerDigits: 2});
  document.getElementsByClassName('seconds')[0].innerHTML = '00';
    $('#start').show();

}




$(document).ready(function(){


$("#a1").click(function(e){
    e.preventDefault();
    var value = $("#b1").val();
    console.log(value);
    document.getElementById('current1').innerHTML = value; 
});

$("#c1").click(function(e){
    e.preventDefault();
    document.getElementById('b1').value = "TASK 1 DONE";
    document.getElementById('current1').innerHTML = "TASK 1 DONE"; 

})

$("#a2").click(function(e){
    e.preventDefault();
    var value = $("#b2").val();
    console.log(value);
    document.getElementById('current2').innerHTML = value; 
});

$("#c2").click(function(e){
    e.preventDefault();
    document.getElementById('b2').value = "TASK 2 DONE";

})

$("#a3").click(function(e){
    e.preventDefault();
    var value = $("#b3").val();
    console.log(value);
    document.getElementById('current3').innerHTML = value; 
});

$("#c3").click(function(e){
    e.preventDefault();
    document.getElementById('b3').value = "TASK 3 DONE";

})


});

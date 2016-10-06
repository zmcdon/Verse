$(document).ready(function(){

$('.menu').on('click', function(){
    $('.popOut').slideToggle('slow');
});


$('.signUpBtn').on('click', function(){
    $('.myForm').show();
    $('.signUpBtn').hide();

  });


   $('.myForm').on('submit', function(signUp) {
  signUp.preventDefault();
   var firstName = document.getElementById("firstName").value;
   var lastName = document.getElementById("lastName").value;
   var email = document.getElementById("email").value;
   var phone = document.getElementById("phone").value;
   var age = document.getElementById("age").value;
  // $('#infoInfo').html('Hi ' + firstName + '!');
  var userAnswer = prompt('Hi ' + lastName + ', ' + firstName + '. We have your contact info recorded as: phone =' + phone + ', your email as =' + email + '. Is this correct?' );                    
  
  if (userAnswer === 'y'){
      if (age >= 10) {
        document.getElementById("infoInfo").innerHTML = 'Awesome, welcome ' + firstName + '!';
        $('.myForm').remove();
        $('.todoCont').show();
      } 
    } 
    if (age < 10) {
      alert('You are to young, sorry.');
      $('.myForm').remove();
      document.getElementById("infoInfo").innerHTML = 'Sorry ' + firstName + '!';
    };
  

  });


$(".todoSubmitBtn").click(function(a){
      a.preventDefault();
      var text = document.getElementById('newItem').value;
        $(".add").append('<li>' + text + '</li>');
        $(".todoForm")[0].reset();
    });

$('.add').on('dblclick','li', function(){
        $(this).fadeOut('slow');    
      });

 $("#scrollBtn").click(function() {
    $('html, body').animate({
        scrollTop: $(".fear").offset().top
    }, 2000);
});

 $(".proPop").click(function() {
    $('html, body').animate({
        scrollTop: $(".promise").offset().top
    }, 2000);
    $('.popOut').hide();
});






function scaleToFill() {
    $('video.video-background').each(function(index, videoTag) {
       var $video = $(videoTag),
           videoRatio = videoTag.videoWidth / videoTag.videoHeight,
           tagRatio = $video.width() / $video.height(),
           val;

       if (videoRatio < tagRatio) {
           val = tagRatio / videoRatio * 1.02;
       } else if (tagRatio < videoRatio) {
           val = videoRatio / tagRatio * 1.02;
       }

       $video.css('transform','scale(' + val  + ',' + val + ')');

    });    
}

$(function () {
    scaleToFill();

    $('.video-background').on('loadeddata', scaleToFill);

    $(window).resize(function() {
        scaleToFill();
    });
});

var vid = document.getElementById("video-background");
function setPlaySpeed() {
    vid.playbackRate = 0.1;
};
setPlaySpeed();









});


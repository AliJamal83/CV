var slidetimer = 500;

function qualSlider(){
  $('#qualifications').slideToggle(slidetimer);
}

$('#q-link').click(function(){
  qualSlider();
});
$('#wlink').click(function() {
  $('#work').slideToggle(slidetimer) ;
});

$('#edulink').click(function() {
  $('#edu').slideToggle(slidetimer)
});
$('#contactlink').click(function() {
  $('#contact').slideToggle(slidetimer)
});


$('#panda').hover(
  function() {
    $('#panda').animate({marginTop:'-15px', opacity:'1'},400);
},
  function() {
    setTimeout("$('#panda').animate({marginTop:'0px',opacity:'0.6'},200);", 400);
}

                 );

$(document).ready(function(){

	console.log("hello1");

	$( ".q1" ).hover(
  function() {
    $( this ).addClass( "hover" );
  }, function() {
    $( this ).removeClass( "hover" );
  }
);
});
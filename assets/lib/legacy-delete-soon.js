// TASK LIST
$(function() {		
   	$( ".projects-list" ).sortable({
      	revert: true
   	});		
   	//$( "ul, li" ).disableSelection();		
});

$(document).ready(function() {
  /* Activating Best In Place */
  jQuery(".best_in_place").best_in_place();
});
	
// SLIDEOUT TRAY
$(document).ready(function() {
  var tray = $('.tasks-tray');
  $(tray).hide();
  
  $('#task-expand').click(function(e) {
  	$('.content-wrap').toggleClass('active inactive',350);
    $(tray).animate({width:'toggle'},350);
    e.preventDefault();
  });
});

// REMOVE ALERT
$(".close").click(function(){
    $(this).parent().remove();
});
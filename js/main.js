$("#mobile-nav-button").click(function() {
	$("#mobile-nav").slideToggle( "fast", function() {
    	// Animation complete.
	});
});
$(document).ready(function(){
	$('#mobile-nav-button').click(function(){
		$(this).toggleClass('open');
	});
});
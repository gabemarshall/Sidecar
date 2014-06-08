// Add current class to the current filter
$('.pricing-table-wrap').hover(function(){
	$('.pricing-table-wrap').removeClass("recommended-plan");
	$(this).addClass("recommended-plan");
});
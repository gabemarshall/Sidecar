jQuery(function ($) {

	// Cache jQuery objects
	var $document = $(document),
		$mobileProfTrigger = $('.oc-profile'),
		$mobileProf = $('.oc-sublist'),
		profTrigger = '.ah-profile',
		prof = '.ah-sublist';

	// Mobile profile dropdown
	$mobileProfTrigger.on('click', function (e) {
		var $this = $(this);

		e.preventDefault();

		$mobileProf.toggleClass('oc-sublist--open');
		$this.toggleClass('oc-profile--open');
	});

	// Desktop profile dropdown
	$document
		.on('click', function () {
			$(prof).removeClass('ah-sublist--open');
		})
		.on('click', profTrigger, function (e) {
			e.preventDefault();
			e.stopPropagation();

			$(prof).toggleClass('ah-sublist--open');
		})
		.on('click', prof, function (e) {
			e.stopPropagation();
		});

	// Add shadow to header when the page scrolls
	$(window).scroll(function() {
	    var scroll = $(window).scrollTop();

	     //>=, not <=
	    if (scroll >= 1) {
	        //clearHeader, not clearheader - caps H
	        $(".site-header").addClass("scrolled");
	    } else {
	        $(".site-header").removeClass('scrolled');
	    }
	}); //missing );
});
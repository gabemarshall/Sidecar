$('.account-navigation li, .notifications li').click(function() {
	$('.dropdown').not( $(this).children('.dropdown') ).removeClass('visible');
	$(this).children('.dropdown').toggleClass('visible');
});

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


var lineChartData = {
	labels : ["January","February","March","April","May","June","July"],
	datasets : [
		{
			fillColor : "rgba(220,220,220,0.5)",
			strokeColor : "rgba(220,220,220,1)",
			pointColor : "rgba(220,220,220,1)",
			pointStrokeColor : "#fff",
			data : [65,59,90,81,56,55,40]
		},
		{
			fillColor : "rgba(98,181,186,0.5)",
			strokeColor : "rgba(98,181,186,1)",
			pointColor : "rgba(98,181,186,1)",
			pointStrokeColor : "#fff",
			data : [28,48,40,19,96,27,100]
		}
	]
}

var myLine = new Chart(document.getElementById("billingChart").getContext("2d")).Line(lineChartData);

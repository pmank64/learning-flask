$( document ).ready(function() {
    
	var width = $(window).width();

	if (width > 766){

		var height = $(window).height();
		$(".col-height").css("height",  height + "px");

	}

	$(window).resize(function(){

		if (width > 766){

		var height = $(window).height();
		$(".col-height").css("height",  height + "px");
		
		}
	});
});
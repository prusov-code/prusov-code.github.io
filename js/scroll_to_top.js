$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop() > 100) {
			$('#scroll_top').fadeIn();
		} else {
			$('#scroll_top').fadeOut();
		}
	});
 
	$('#scroll_top').click(function(){
		$(this).css('transition','inherit')
		$("html, body").animate({scrollTop: 0});
		return false;
	});
});

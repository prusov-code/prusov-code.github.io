$('.open_popup').on('click', function() {
	let class_name='.website_info_popup_'+$(this).attr('class').split(/\s+/)[1];
	$('body').css('overflow-y','hidden');
	$(`${class_name}`).slideToggle('slow');
	$(".website_slider").slick("refresh");
});
$('.popup_exit_button').on('click', function() {
	$('body').css('overflow-y','visible');
	$(this).parent().slideToggle('slow');
});
$('.popup_exit').on('click', function() {
	$('body').css('overflow-y','visible');
	$(this).parent().slideToggle('slow');
});
$('.leibmedic').on('click', function() {
  //$('.website_info_popup_leibmedic>.inner').html('<iframe width="100%" height="80vh" src="https://leibmedic.ru/" name="iframe" scrolling="auto"></iframe>');
});
/*$('.website_info_popup>.shadow').on('click', function() {
	$('body').css('overflow-y','visible');
	$(this).parent().slideToggle('slow');
});*/

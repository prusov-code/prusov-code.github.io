$('.english_language').on('click',function () {
	if($('.intro>h3').text()=='Разработка, ведение и продвижение сайтов') {
	    $('.nav').slideUp();
	    $('.intro>h3').slideUp();
	    $('.footer_title').slideUp();
	    $('.footer_regular[href="https://vk.com/nik_prusov"]').slideUp();
	    $('.contacts>h1').slideUp();
	    $('.contacts>h3').slideUp();
		setTimeout(function() {
	  		$('.nav').html('<a href="#about_me"><li>About me</li></a><a href="#principles"><li>Work principles</li></a><a href="#works"><li>Works</li></a><a href="#technical_part"><li>Technical section</li></a><a href="#contacts"><li>Contacts</li></a>');
	  		$('.nav').slideDown();
			$('.intro>h3').text('Website development, maintenance and promotion');
			$('.intro>h3').slideDown();
			$('.footer_title').text('Contacts');
			$('.footer_title').slideDown();
			$('.footer_regular[href="https://vk.com/nik_prusov"]').html('<i class="fa fa-vk" aria-hidden="true"></i>Nikita Prusov');
		    $('.footer_regular[href="https://vk.com/nik_prusov"]').slideDown();
		    $('.contacts>h1').text('Contacts');
		    $('.contacts>h1').slideDown();
		    $('.contacts>h3').text('Interested in my services? Contact me using the contacts below');
		    $('.contacts>h3').slideDown();
	 	}, 1000);	
	}
});
$('.russian_language').on('click',function () {
	if($('.intro>h3').text()!='Разработка, ведение и продвижение сайтов') {
		 $('.nav').slideUp();
	    $('.intro>h3').slideUp();
	    $('.footer_title').slideUp();
	     $('.footer_regular[href="https://vk.com/nik_prusov"]').slideUp();
	        $('.contacts>h1').slideUp();
	        $('.contacts>h3').slideUp();
		setTimeout(function() {
	  		$('.nav').html('<a href="#about_me"><li>Обо мне</li></a><a href="#principles"><li>Принципы работы</li></a><a href="#works"><li>Работы</li></a><a href="#technical_part"><li>Технический раздел</li></a><a href="#contacts"><li>Контакты</li></a>');
	  		$('.nav').slideDown();
			$('.intro>h3').text('Разработка, ведение и продвижение сайтов');
			$('.intro>h3').slideDown();
			$('.footer_title').text('Контакты');
			$('.footer_title').slideDown();
			$('.footer_regular[href="https://vk.com/nik_prusov"]').html('<i class="fa fa-vk" aria-hidden="true"></i>Никита Прусов');
		    $('.footer_regular[href="https://vk.com/nik_prusov"]').slideDown();
		    $('.contacts>h1').text('Контакты');
		    $('.contacts>h1').slideDown();
		    $('.contacts>h3').text('Интересуют услуги? Свяжитесь со мной при помощи контактов ниже');
		    $('.contacts>h3').slideDown();
	 	}, 1000);	
	}
});
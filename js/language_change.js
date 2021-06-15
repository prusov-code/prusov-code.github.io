$('.english_language').on('click',function () {
	if($('.intro>h3').text()=='Разработка, ведение и продвижение сайтов') {
	    $('.nav').slideUp();
	    $('.intro>h3').slideUp();
	    $('.footer_title').slideUp();
	    $('.footer_regular[href="https://vk.com/nik_prusov"]').slideUp();
	    $('.contacts>h1').slideUp();
	    $('.contacts>h3').slideUp();
	     for(var i=1;i<4;i++) {
		     $('section>h1').eq(i).slideUp();
	     }
	     for(var i=0;i<4;i++) {
		     $('#technical_part>h3').eq(i).slideUp();
	     }
 	     
 	     $('.summary>a>p').slideUp();
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
		     $('section>h1').eq(1).text('About me');
		     $('section>h1').eq(2).text('Work principles');
		     $('section>h1').eq(3).text('My works');
 		     $('section>h1').eq(4).text('Technical information');
     	     for(var i=1;i<4;i++) {
			     $('section>h1').eq(i).slideDown();
		     }
	         $('#technical_part>h3').eq(0).text('Main stack');
		     $('#technical_part>h3').eq(1).text('Frameworks,libraries');
		     $('#technical_part>h3').eq(2).text('Databases');
 		     $('#technical_part>h3').eq(3).text('Additional knowledge');
 		     $('#technical_part>h3').eq(4).text('Summary:');
     	     for(var i=0;i<4;i++) {
			     $('#technical_part>h3').eq(i).slideDown();
		     }
		       $('.summary>a>p').text('Download summary');
		       $('.summary>a>p').slideDown();
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
	          for(var i=1;i<4;i++) {
		     $('section>h1').eq(i).slideUp();
	     }
	     for(var i=0;i<4;i++) {
		     $('#technical_part>h3').eq(i).slideUp();
	     }
 	        $('.summary>a>p').slideUp();
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
		     $('section>h1').eq(1).text('Обо мне');
		     $('section>h1').eq(2).text('Принципы работы');
		     $('section>h1').eq(3).text('Работы');
 		     $('section>h1').eq(4).text('Технический раздел');
     	     for(var i=1;i<4;i++) {
			     $('section>h1').eq(i).slideDown();
		     }
	         $('#technical_part>h3').eq(0).text('Основной стек:');
		     $('#technical_part>h3').eq(1).text('Фреймворки, библиотеки и другие технологии:');
		     $('#technical_part>h3').eq(2).text('Базы данных:');
 		     $('#technical_part>h3').eq(3).text('Дополнительные знания:');
 		     $('#technical_part>h3').eq(4).text('Резюме:');
     	     for(var i=0;i<4;i++) {
			     $('#technical_part>h3').eq(i).slideDown();
		     }
		            $('.summary>a>p').text('Скачать резюме');
		       $('.summary>a>p').slideDown();
	 	}, 1000);	
	}
});
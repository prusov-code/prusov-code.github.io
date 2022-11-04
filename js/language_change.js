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
 	     $('.about_me .text_block h1').slideUp();
 	     $('.about_me .text_block h2').eq(0).slideUp();
	     $('.about_me .text_block h2').eq(1).slideUp();	     
	     $('.about_me .text_block p').eq(0).slideUp();
	     $('.about_me .text_block p').eq(1).slideUp();
	     $('.about_me .text_block p').eq(2).slideUp();
		 $('.about_me .text_block p').eq(3).slideUp();
	     $('.about_me .text_block p').eq(4).slideUp();
	     $('.principles .items .item').eq(0).find('.title').slideUp();
	     $('.principles .items .item').eq(0).find('.regular').slideUp();
	     $('.principles .items .item').eq(1).find('.title').slideUp();
	     $('.principles .items .item').eq(1).find('.regular').slideUp();
	     $('.principles .items .item').eq(2).find('.title').slideUp();
	     $('.principles .items .item').eq(2).find('.regular').slideUp();
	     $('.principles .items .item').eq(3).find('.title').slideUp();
	     $('.principles .items .item').eq(3).find('.regular').slideUp();
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
		     $('section>h1').eq(3).text('Portfolio');
 		     $('section>h1').eq(4).text('Technical information');
 		     $('.menu-hide nav ul>a').eq(0).find('li').text('About me');
		     $('.menu-hide nav ul>a').eq(1).find('li').text('Work principles');
		     $('.menu-hide nav ul>a').eq(2).find('li').text('Portfolio');
 		     $('.menu-hide nav ul>a').eq(3).find('li').text('Technical information');
 		     $('.menu-hide nav ul>a').eq(4).find('li').text('Contacts');
     	     for(var i=1;i<4;i++) {
			     $('section>h1').eq(i).slideDown();
		     }
		     $('.about_me .text_block h1').text('Prusov Nikita');
		     $('.about_me .text_block h1').slideDown();
		     $('.about_me .text_block h2').eq(0).text('Full-stack web developer');
		     $('.about_me .text_block h2').eq(0).slideDown();
		     $('.about_me .text_block h2').eq(1).text('Full range of web development services. Frontend, backend, SEO');
		     $('.about_me .text_block h2').eq(1).slideDown();
		     $('.about_me .text_block p').eq(0).text('I have been doing web development for more than 3 years. Among my works there are both small business card sites and full-fledged online stores and web services.');
		     $('.about_me .text_block p').eq(0).slideDown();
		     $('.about_me .text_block p').eq(1).text('Among my clients: construction companies, private clinics, training centers, cafes');
		     $('.about_me .text_block p').eq(1).slideDown();
		     $('.about_me .text_block p').eq(2).text('I always work out the strategy with the customer as carefully as possible, thereby creating exactly the product that is necessary for the development and promotion of your business.');
		     $('.about_me .text_block p').eq(2).slideDown();
 		     $('.about_me .text_block p').eq(3).text('I continue to conduct my projects after the completion of the main work, solving routine issues with the domain, hosting, as well as minor edits on the site.');
		     $('.about_me .text_block p').eq(3).slideDown();
		     $('.about_me .text_block p').eq(4).text('I use modern web development technologies, which significantly speeds up and reduces the cost of website production.');
		     $('.about_me .text_block p').eq(4).slideDown();
		     $('.principles .items .item').eq(0).find('.title').text('Individual approach');
		     $('.principles .items .item').eq(0).find('.regular').text('Before starting work, I always personally communicate with the customer, which helps to better understand the product and choose the right strategy. Each project is unique and is developed from scratch, taking into account all the wishes of the customer');
		     $('.principles .items .item').eq(1).find('.title').text('Adaptability');
		     $('.principles .items .item').eq(1).find('.regular').text('Websites look great on any device, small or large');
		     $('.principles .items .item').eq(2).find('.title').text('Performance');
		     $('.principles .items .item').eq(2).find('.regular').text('Fast site loading time and interaction with it without delay is my highest priority.');
		     $('.principles .items .item').eq(3).find('.title').text('SEO optimization');
		     $('.principles .items .item').eq(3).find('.regular').text('My sites have a high-quality semantic core, which positively affects the output in search engines, as well as the influx of target audience to the site');
            $('.principles .items .item').eq(0).find('.title').slideDown();
		     $('.principles .items .item').eq(0).find('.regular').slideDown();
		     $('.principles .items .item').eq(1).find('.title').slideDown();
		     $('.principles .items .item').eq(1).find('.regular').slideDown();
		     $('.principles .items .item').eq(2).find('.title').slideDown();
		     $('.principles .items .item').eq(2).find('.regular').slideDown();
		     $('.principles .items .item').eq(3).find('.title').slideDown();
		     $('.principles .items .item').eq(3).find('.regular').slideDown();
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
	     $('.about_me .text_block h1').slideUp();
 	     $('.about_me .text_block h2').eq(0).slideUp();
	     $('.about_me .text_block h2').eq(1).slideUp();	     
	     $('.about_me .text_block p').eq(0).slideUp();
	     $('.about_me .text_block p').eq(1).slideUp();
	     $('.about_me .text_block p').eq(2).slideUp();
		 $('.about_me .text_block p').eq(3).slideUp();
	     $('.about_me .text_block p').eq(4).slideUp();
	     $('.principles .items .item').eq(0).find('.title').slideUp();
	     $('.principles .items .item').eq(0).find('.regular').slideUp();
	     $('.principles .items .item').eq(1).find('.title').slideUp();
	     $('.principles .items .item').eq(1).find('.regular').slideUp();
	     $('.principles .items .item').eq(2).find('.title').slideUp();
	     $('.principles .items .item').eq(2).find('.regular').slideUp();
	     $('.principles .items .item').eq(3).find('.title').slideUp();
	     $('.principles .items .item').eq(3).find('.regular').slideUp();
		setTimeout(function() {
	  		$('.nav').html('<a href="#about_me"><li>Обо мне</li></a><a href="#principles"><li>Принципы работы</li></a><a href="#works"><li>Портфолио</li></a><a href="#technical_part"><li>Технический раздел</li></a><a href="#contacts"><li>Контакты</li></a>');
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
		     $('section>h1').eq(3).text('Портфолио');
 		     $('section>h1').eq(4).text('Технический раздел');
	         $('.menu-hide nav ul>a').eq(0).find('li').text('Обо мне');
		     $('.menu-hide nav ul>a').eq(1).find('li').text('Принципы работы');
		     $('.menu-hide nav ul>a').eq(2).find('li').text('Портфолио');
 		     $('.menu-hide nav ul>a').eq(3).find('li').text('Технический раздел');
 		     $('.menu-hide nav ul>a').eq(4).find('li').text('Контакты');
     	     for(var i=1;i<4;i++) {
			     $('section>h1').eq(i).slideDown();
		     }
		     $('.about_me .text_block h1').text('Прусов Никита');
		     $('.about_me .text_block h1').slideDown();
		     $('.about_me .text_block h2').eq(0).text('Full-stack веб-разработчик');
		     $('.about_me .text_block h2').eq(0).slideDown();
		     $('.about_me .text_block h2').eq(1).text('Полный спектр услуг веб-разработки. Frontend, backend, SEO');
		     $('.about_me .text_block h2').eq(1).slideDown();
		     $('.about_me .text_block p').eq(0).text('Я занимаюсь веб-разработкой уже более 3 лет. Среди моих работ присутствуют как небольшие сайты-визитки, так и полноценные интернет-магазины и веб-сервисы.');
		     $('.about_me .text_block p').eq(0).slideDown();
		     $('.about_me .text_block p').eq(1).text('Среди моих клиентов: строительные фирмы, частные клиники, учебные центры, кафе');
		     $('.about_me .text_block p').eq(1).slideDown();
		     $('.about_me .text_block p').eq(2).text('Я всегда максимально тщательно прорабатываю стратегию с заказчиком, создавая тем самым именно тот продукт, который необходим для развития и продвижения вашего бизнеса.');
		     $('.about_me .text_block p').eq(2).slideDown();
 		     $('.about_me .text_block p').eq(3).text('Я продолжаю вести свои проекты после окончания основных работ, решаю рутинные вопросы с доменом, хостингом, а также мелкими правками на сайте.');
		     $('.about_me .text_block p').eq(3).slideDown();
		     $('.about_me .text_block p').eq(4).text('Я использую современные технологии веб-разработки, что значительно ускоряет и удешевляет производство сайтов.');
		     $('.about_me .text_block p').eq(4).slideDown();
		     $('.principles .items .item').eq(0).find('.title').text('Индивидуальный подход');
		     $('.principles .items .item').eq(0).find('.regular').text('Перед началом работы я всегда лично общаюсь с заказчиком, что помогает лучше понять продукт и выбрать правильную стратегию. Каждый проект уникален и разрабатывается с нуля, с учетом всех пожеланий заказчика');
		     $('.principles .items .item').eq(1).find('.title').text('Адаптивность');
		     $('.principles .items .item').eq(1).find('.regular').text('Сайты отлично смотрятся на любых устройствах, маленьких или больших');
		     $('.principles .items .item').eq(2).find('.title').text('Быстродействие');
		     $('.principles .items .item').eq(2).find('.regular').text('Быстрое время загрузки сайта и взаимодействие с ним без задержек - мой наивысший приоритет.');
		     $('.principles .items .item').eq(3).find('.title').text('SEO оптимизация');
		     $('.principles .items .item').eq(3).find('.regular').text('Мои сайты обладают качественным семантическим ядром, что положительно влияет на выдачу в поисковиках, а также на приток целевой аудитории на сайт');
            $('.principles .items .item').eq(0).find('.title').slideDown();
		     $('.principles .items .item').eq(0).find('.regular').slideDown();
		     $('.principles .items .item').eq(1).find('.title').slideDown();
		     $('.principles .items .item').eq(1).find('.regular').slideDown();
		     $('.principles .items .item').eq(2).find('.title').slideDown();
		     $('.principles .items .item').eq(2).find('.regular').slideDown();
		     $('.principles .items .item').eq(3).find('.title').slideDown();
		     $('.principles .items .item').eq(3).find('.regular').slideDown();
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
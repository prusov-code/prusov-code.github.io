(function ($) {
	var currentLang = 'ru';

	var i18n = {
		ru: {
			htmlLang: 'ru',
			docTitle: 'Prusov-Code | Разработка сайтов под ключ | Никита Прусов — full-stack веб-разработчик',
			scrollTop: 'Наверх',
			nav: [
				'Обо мне',
				'Принципы работы',
				'Портфолио',
				'Технологии',
				'Контакты'
			],
			intro: 'Разработка, ведение и продвижение сайтов',
			aboutHeading: 'Обо мне',
			aboutName: 'Прусов Никита',
			aboutRole: 'Full-stack веб-разработчик',
			aboutServices: 'Полный спектр услуг веб-разработки: frontend, backend, SEO.',
			aboutParagraphs: [
				'Я занимаюсь веб-разработкой уже более 3 лет. Среди моих работ присутствуют как небольшие сайты-визитки, так и полноценные интернет-магазины и веб-сервисы.',
				'Среди моих клиентов: строительные фирмы, частные клиники, учебные центры, кафе.',
				'Я всегда максимально тщательно прорабатываю стратегию с заказчиком, создавая тем самым именно тот продукт, который необходим для развития и продвижения вашего бизнеса.',
				'Я продолжаю вести свои проекты после окончания основных работ, решаю рутинные вопросы с доменом, хостингом, а также мелкими правками на сайте.',
				'Я использую современные технологии веб-разработки, что значительно ускоряет и удешевляет производство сайтов.'
			],
			principlesHeading: 'Принципы работы',
			principles: [
				{
					title: 'Индивидуальный подход',
					text: 'Перед началом работы я всегда лично общаюсь с заказчиком, что помогает лучше понять продукт и выбрать правильную стратегию. Каждый проект уникален и разрабатывается с нуля с учётом всех пожеланий заказчика.'
				},
				{
					title: 'Адаптивность',
					text: 'Сайты отлично смотрятся на любых устройствах — от экрана компьютера до смартфона.'
				},
				{
					title: 'Быстродействие',
					text: 'Быстрое время загрузки сайта и взаимодействие с ним без задержек — мой наивысший приоритет.'
				},
				{
					title: 'SEO-оптимизация',
					text: 'Мои сайты обладают качественным семантическим ядром, что положительно влияет на выдачу в поисковиках, а также на приток целевой аудитории на сайт.'
				}
			],
			worksHeading: 'Портфолио',
			moreButton: 'Подробнее',
			visitButton: 'Посетить сайт',
			closedButton: 'Сайт закрыт',
			zoomHint: 'Нажмите, чтобы увеличить',
			works: [
				'Клиника «Придворный лекарь»',
				'Учебный центр «Древо Познаний»',
				'Сайт ОАНО частной начальной школы «Древо познаний»',
				'Онлайн-сервис «Zenmix»',
				'Строительная компания<br>«Глобал строй»',
				'Строительство домов<br>«Глобал строй»',
				'Сайт экономиста<br>Леонида Григорьева',
				'Художник Светлана Прусова',
				'Сайт кафе «Ешь!»'
			],
			technicalHeading: 'Технологии',
			technicalSubtitles: [
				'Основной стек:',
				'Фреймворки, библиотеки и инструменты:',
				'Базы данных:',
				'Инфраструктура и практики:'
			],
			githubHeading: 'Мой GitHub',
			contactsHeading: 'Контакты',
			contactsLead: 'Интересуют услуги? Свяжитесь со мной по контактам ниже.',
			footerContacts: 'Контакты',
			vkName: 'Никита Прусов',
			popups: {
				yesh: {
					title: 'Сайт кафе «Ешь!»',
					description: 'Сайт кафе с возможностью онлайн-заказа и внутренней системой приёма и обработки заказов.',
					items: [
						'Созданы информационные страницы сайта.',
						'Создана система добавления товаров в корзину и оформления заказа с возможностью онлайн-оплаты.',
						'Создана внутренняя система (backoffice) приёма и обработки заказов со статистикой и админ-панелью.'
					]
				},
				lg: {
					title: 'Сайт экономиста Леонида Григорьева',
					description: 'Персональный сайт экономиста и профессора Леонида Григорьева.',
					items: [
						'Созданы информационные страницы сайта.',
						'Реализованы англоязычная и русскоязычная версии сайта.',
						'Создана контактная форма.'
					]
				},
				leibmedic: {
					title: 'Корпоративный сайт и интернет-магазин «Придворный лекарь»',
					description: 'Информационные страницы о клинике, интернет-магазин трав и БАДов, внутренняя медицинская система.',
					items: [
						'Созданы основные информационные страницы, описывающие клинику и методы лечения.',
						'Создан интернет-магазин с возможностью онлайн-оплаты через ЮMoney.',
						'Создана медицинская система для взаимодействия врачей и пациентов с возможностью онлайн-записи. Позволяет вести медкарту пациента и выдавать ему рецепты.',
						'Создан блог с возможностью добавления постов через админ-панель.'
					]
				},
				drevo: {
					title: 'Корпоративный сайт и школьный портал «Древо Познаний»',
					description: 'Система школьного портала для учеников и учителей, переработка frontend, улучшение семантического ядра.',
					items: [
						'Создана система онлайн-дневника, где можно выставлять оценки и домашние задания ученикам. Ученики, в свою очередь, могут смотреть всю информацию на своей странице.',
						'Переработан фронтенд сайта, оптимизирован под мобильные устройства.',
						'Проведена работа по улучшению семантического ядра.'
					]
				},
				drevorf: {
					title: 'Сайт ОАНО частной школы «Древо познаний»',
					description: 'Выполнен в соответствии с требованиями № 273-ФЗ для сайтов образовательных организаций.',
					items: [
						'Созданы информационные страницы сайта.',
						'Созданы страницы, содержащие документы образовательной организации, подписанные электронной подписью, информацию о которой можно просмотреть. Размещена общая информация об организации.',
						'В соответствии с требованиями реализована версия сайта для слабовидящих (включает в себя различные цветовые фильтры, изменение размера шрифта, озвучку текста и т. д.).',
						'Реализован поиск по сайту и документам.',
						'Создана форма обратной связи по вопросам питания учащихся.'
					]
				},
				zenmix: {
					title: 'Веб-сервис «Zenmix»',
					description: 'Платформа для прослушивания звуков природы и города.',
					items: [
						'Созданы информационные страницы сайта.',
						'Созданы страницы авторизации и регистрации через базу данных.',
						'Создана страница профиля, где пользователь может прослушивать звуки и приобрести платную подписку с дополнительными звуками и возможностями. Можно создавать плейлисты или пользоваться готовыми.'
					]
				},
				'global-stroi': {
					title: 'Сайт строительной компании «Глобал Строй» по строительству домов',
					description: 'Сайт на стадии активной разработки.',
					items: [
						'Созданы информационные страницы сайта.',
						'Создана форма обратной связи.'
					]
				},
				'global-stroy': {
					title: 'Сайт строительной компании «Глобал Строй»',
					description: 'Сайт на стадии разработки.',
					items: [
						'Созданы информационные страницы сайта.',
						'Создана форма обратной связи.'
					]
				},
				prusova: {
					title: 'Сайт художника Светланы Прусовой',
					description: 'Персональный сайт художника.',
					items: [
						'Созданы информационные страницы сайта.',
						'Создана форма обратной связи.'
					]
				}
			}
		},
		en: {
			htmlLang: 'en',
			docTitle: 'Prusov-Code | Turnkey website development | Nikita Prusov — full-stack web developer',
			scrollTop: 'Back to top',
			nav: [
				'About me',
				'Work principles',
				'Portfolio',
				'Technologies',
				'Contacts'
			],
			intro: 'Website development, maintenance and promotion',
			aboutHeading: 'About me',
			aboutName: 'Nikita Prusov',
			aboutRole: 'Full-stack web developer',
			aboutServices: 'Full range of web development services: frontend, backend, SEO.',
			aboutParagraphs: [
				'I have been doing web development for more than 3 years. Among my works there are both small business-card sites and full-fledged online stores and web services.',
				'Among my clients: construction companies, private clinics, training centers, cafes.',
				'I always work out the strategy with the client as carefully as possible, creating exactly the product needed for the growth and promotion of your business.',
				'I continue to maintain my projects after the main work is done, handling routine domain and hosting issues as well as minor site edits.',
				'I use modern web development technologies, which significantly speeds up and reduces the cost of website production.'
			],
			principlesHeading: 'Work principles',
			principles: [
				{
					title: 'Individual approach',
					text: 'Before starting work, I always talk with the client personally, which helps me better understand the product and choose the right strategy. Each project is unique and is built from scratch with all the client’s wishes in mind.'
				},
				{
					title: 'Responsiveness',
					text: 'Websites look great on any device — from a computer screen to a smartphone.'
				},
				{
					title: 'Performance',
					text: 'Fast loading time and lag-free interaction are my highest priority.'
				},
				{
					title: 'SEO optimization',
					text: 'My sites have a solid semantic core, which improves search engine rankings and helps attract a target audience.'
				}
			],
			worksHeading: 'Portfolio',
			moreButton: 'Learn more',
			visitButton: 'Visit website',
			closedButton: 'Site closed',
			zoomHint: 'Click to enlarge',
			works: [
				'Clinic “Court Physician”',
				'“Tree of Knowledge” training center',
				'Private elementary school “Tree of Knowledge”',
				'Online service “Zenmix”',
				'Construction company<br>“Global Stroy”',
				'House construction<br>“Global Stroy”',
				'Economist<br>Leonid Grigoryev’s website',
				'Artist Svetlana Prusova',
				'Cafe “Yesh!”'
			],
			technicalHeading: 'Technologies',
			technicalSubtitles: [
				'Main stack:',
				'Frameworks, libraries and tools:',
				'Databases:',
				'Infrastructure and practices:'
			],
			githubHeading: 'My GitHub',
			contactsHeading: 'Contacts',
			contactsLead: 'Interested in my services? Contact me using the details below.',
			footerContacts: 'Contacts',
			vkName: 'Nikita Prusov',
			popups: {
				yesh: {
					title: 'Cafe “Yesh!” website',
					description: 'A cafe website with online ordering and an internal system for receiving and processing orders.',
					items: [
						'Built the informational pages of the site.',
						'Built a cart and checkout flow with online payment support.',
						'Built an internal backoffice for receiving and processing orders, with statistics and an admin panel.'
					]
				},
				lg: {
					title: 'Economist Leonid Grigoryev’s website',
					description: 'A personal website for economist and professor Leonid Grigoryev.',
					items: [
						'Built the informational pages of the site.',
						'Implemented English and Russian versions of the site.',
						'Built a contact form.'
					]
				},
				leibmedic: {
					title: 'Corporate website and online store “Court Physician”',
					description: 'Informational pages about the clinic, an online store of herbs and dietary supplements, and an internal medical system.',
					items: [
						'Built the main informational pages describing the clinic and treatment methods.',
						'Built an online store with online payment via YuMoney.',
						'Built a medical system for doctor–patient interaction with online appointment booking. It supports patient medical records and prescriptions.',
						'Built a blog with post publishing through an admin panel.'
					]
				},
				drevo: {
					title: 'Corporate website and school portal “Tree of Knowledge”',
					description: 'A school portal system for students and teachers, frontend redesign, and semantic core improvements.',
					items: [
						'Built an online gradebook where teachers can assign grades and homework. Students can view all information on their personal page.',
						'Reworked the site frontend and optimized it for mobile devices.',
						'Improved the semantic core.'
					]
				},
				drevorf: {
					title: 'Private school “Tree of Knowledge” website',
					description: 'Built in accordance with Federal Law No. 273-FZ requirements for educational organization websites.',
					items: [
						'Built the informational pages of the site.',
						'Built pages with educational organization documents signed with an electronic signature, whose details can be viewed. General organization information is also published.',
						'Implemented an accessibility version for visually impaired users (color filters, font size changes, text-to-speech, and more).',
						'Implemented search across the site and documents.',
						'Built a feedback form for student meal inquiries.'
					]
				},
				zenmix: {
					title: 'Web service “Zenmix”',
					description: 'A platform for listening to nature and city sounds.',
					items: [
						'Built the informational pages of the site.',
						'Built authorization and registration pages backed by a database.',
						'Built a profile page where users can listen to sounds and purchase a paid subscription with extra sounds and features. Users can create playlists or use ready-made ones.'
					]
				},
				'global-stroi': {
					title: '“Global Stroy” construction company website for house building',
					description: 'The website is in active development.',
					items: [
						'Built the informational pages of the site.',
						'Built a feedback form.'
					]
				},
				'global-stroy': {
					title: '“Global Stroy” construction company website',
					description: 'The website is under development.',
					items: [
						'Built the informational pages of the site.',
						'Built a feedback form.'
					]
				},
				prusova: {
					title: 'Artist Svetlana Prusova’s website',
					description: 'A personal website for the artist.',
					items: [
						'Built the informational pages of the site.',
						'Built a feedback form.'
					]
				}
			}
		}
	};

	function setNav(t) {
		var html = '';
		var hrefs = ['#about_me', '#principles', '#works', '#technical_part', '#contacts'];
		for (var i = 0; i < t.nav.length; i++) {
			html += '<a href="' + hrefs[i] + '"><li>' + t.nav[i] + '</li></a>';
		}
		$('.nav').html(html);
		$('.menu-hide nav ul a').each(function (i) {
			$(this).find('li').text(t.nav[i]);
		});
	}

	function setPopup(key, data) {
		var $popup = $('.website_info_popup_' + key);
		$popup.find('.popup_title').text(data.title);
		$popup.find('.popup_description').text(data.description);
		$popup.find('ul li span').each(function (i) {
			if (data.items[i]) {
				$(this).text(data.items[i]);
			}
		});
		$popup.find('.button_block button').text(
			$popup.find('.button_block--closed').length
				? i18n[currentLang].closedButton
				: i18n[currentLang].visitButton
		);
	}

	function animatedTargets() {
		return $(
			[
				'.nav',
				'.intro > h3',
				'#about_me > h1',
				'.about_me .text_block h1',
				'.about_me .text_block h2',
				'.about_me .text_block p',
				'#principles > h1',
				'.principles .items .item .title',
				'.principles .items .item .regular',
				'#works > h1',
				'#works .items .item > p',
				'#works .open_popup',
				'#technical_part > h1',
				'#technical_part > h3',
				'.contacts > h1',
				'.contacts > h3',
				'.footer_title'
			].join(', ')
		);
	}

	function applyLanguage(lang) {
		if (!i18n[lang]) return;
		currentLang = lang;
		var t = i18n[lang];

		document.documentElement.lang = t.htmlLang;
		document.title = t.docTitle;
		$('#scroll_top').attr('title', t.scrollTop);

		setNav(t);

		$('.intro > h3').text(t.intro);
		$('#about_me > h1').text(t.aboutHeading);
		$('.about_me .text_block h1').text(t.aboutName);
		$('.about_me .text_block h2').eq(0).text(t.aboutRole);
		$('.about_me .text_block h2').eq(1).text(t.aboutServices);
		$('.about_me .text_block p').each(function (i) {
			if (t.aboutParagraphs[i]) {
				$(this).text(t.aboutParagraphs[i]);
			}
		});

		$('#principles > h1').text(t.principlesHeading);
		$('.principles .items .item').each(function (i) {
			if (!t.principles[i]) return;
			$(this).find('.title').text(t.principles[i].title);
			$(this).find('.regular').text(t.principles[i].text);
		});

		$('#works > h1').text(t.worksHeading);
		$('#works .items .item').each(function (i) {
			if (!t.works[i]) return;
			$(this).children('p').first().html(t.works[i]);
		});
		$('#works .open_popup').text(t.moreButton);

		$('#technical_part > h1').first().text(t.technicalHeading);
		$('#technical_part > h3').each(function (i) {
			if (t.technicalSubtitles[i]) {
				$(this).text(t.technicalSubtitles[i]);
			}
		});
		$('#technical_part > h1').eq(1).text(t.githubHeading);

		$('.contacts > h1').text(t.contactsHeading);
		$('.contacts > h3').text(t.contactsLead);
		$('.footer_title').text(t.footerContacts);
		$('.footer_regular[href="https://vk.com/nik_prusov"]').html(
			'<i class="fa fa-vk" aria-hidden="true"></i>' + t.vkName
		);

		Object.keys(t.popups).forEach(function (key) {
			setPopup(key, t.popups[key]);
		});
	}

	var isAnimating = false;
	var SLIDE_MS = 400;
	var SWAP_DELAY_MS = 1000;

	function switchLanguage(lang) {
		if (!i18n[lang] || lang === currentLang || isAnimating) return;
		isAnimating = true;

		var $els = animatedTargets();
		$els.stop(true, true).slideUp(SLIDE_MS);

		setTimeout(function () {
			applyLanguage(lang);
			$els.stop(true, true).slideDown(SLIDE_MS, function () {
				// callback fires per element; unlock after first complete cycle via timeout
			});
			setTimeout(function () {
				isAnimating = false;
			}, SLIDE_MS);
		}, SWAP_DELAY_MS);
	}

	$('.english_language').on('click', function () {
		switchLanguage('en');
	});

	$('.russian_language').on('click', function () {
		switchLanguage('ru');
	});
})(jQuery);

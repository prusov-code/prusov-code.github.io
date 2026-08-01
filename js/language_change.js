(function ($) {
	var currentLang = 'ru';

	var i18n = {
		ru: {
			htmlLang: 'ru',
			docTitle: 'Prusov-Code | Разработка сайтов под ключ | Никита Прусов — full-stack веб-разработчик',
			scrollTop: 'Наверх',
			nav: [
				'Обо мне',
				'Автоматизация и AI',
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
				'Разрабатываю сайты и веб-сервисы более 4 лет: от сайтов-визиток до интернет-магазинов и сложных веб-сервисов — примеры можно посмотреть в разделе <a href="#works" class="about-link">Портфолио</a>. Работал с строительными компаниями, частными клиниками, учебными центрами и кафе — знаю специфику разных ниш и умею быстро вникать в новый бизнес.',
				'Перед началом работы всегда прорабатываю стратегию с заказчиком: важно не просто «сделать сайт», а создать инструмент, который решает конкретные бизнес-задачи — привлекает клиентов, упрощает продажи, экономит время.',
				'Сопровождаю проекты и после запуска: беру на себя домен, хостинг, мелкие правки и техническую поддержку, чтобы вы могли сосредоточиться на бизнесе, а не на администрировании сайта.',
				'Помимо классической веб-разработки, занимаюсь автоматизацией и AI-инструментами: работаю с Cursor, пишу MCP-серверы и тулы для AI-агентов, интегрирую LLM через API. Это позволяет добавлять в проекты умную автоматизацию там, где это реально экономит время и деньги клиента — подробнее в разделе <a href="#more_projects" class="about-link">Автоматизация и AI</a>.',
				'Учусь на 5 курсе по направлению «Информационная безопасность автоматизированных систем» — это даёт дополнительное понимание рисков информационной безопасности и требований к надёжности систем.'
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
			moreProjectsHeading: 'Автоматизация и AI',
			moreProjectsLead: 'Помимо веб-разработки, есть ряд смежных направлений, с которыми я тоже работаю. Часть проектов не публикую из‑за NDA, внутренних систем и коммерческой чувствительности.',
			moreProjects: [
				{
					tag: 'Автоматизация',
					title: 'Автоматизация процессов',
					text: 'Реализую автоматизацию под задачу: скрипты и сервисы с БД и интеграциями с внешними API и LLM, а также веб-админки для настройки и контроля.'
				},
				{
					tag: 'AI / агенты',
					title: 'MCP-серверы и инструменты для агентов',
					text: 'Пишу MCP-серверы и тулы для AI-агентов, чтобы LLM могли взаимодействовать с данными и рабочими процессами бизнеса, давая агентам выполнять реальные действия, а не только отвечать текстом.'
				},
				{
					tag: 'Алготрейдинг',
					title: 'Quantitative trading',
					text: 'Имею %e% в квантинге и написании торговых роботов, а также интеграции LLM в торговые/исследовательские пайплайны с обогащением контекста данными из внешних источников.',
					easter: 'успешный опыт'
				}
			],
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
				'Инфраструктура и практики:',
				'AI / agent tooling:'
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
				'Automation and AI',
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
				'I have been building websites and web services for more than 4 years: from business-card sites to online stores and complex web services — you can see examples in the <a href="#works" class="about-link">Portfolio</a> section. I have worked with construction companies, private clinics, training centers, and cafes — I know the specifics of different niches and can quickly get up to speed on a new business.',
				'Before starting work, I always develop a strategy with the client: the goal is not just to “make a website”, but to create a tool that solves concrete business tasks — attracting clients, simplifying sales, and saving time.',
				'I also support projects after launch: I handle the domain, hosting, minor edits, and technical support so you can focus on the business rather than site administration.',
				'Besides classic web development, I work with automation and AI tools: I use Cursor, build MCP servers and tools for AI agents, and integrate LLMs via API. This makes it possible to add smart automation where it truly saves the client time and money — more in the <a href="#more_projects" class="about-link">Automation and AI</a> section.',
				'I am a 5th-year student in Information Security of Automated Systems — this gives me additional understanding of information security risks and system reliability requirements.'
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
			moreProjectsHeading: 'Automation and AI',
			moreProjectsLead: 'Besides web development, there are several related areas I also work in. Some projects are not public due to NDA, internal systems, and commercial sensitivity.',
			moreProjects: [
				{
					tag: 'Automation',
					title: 'Process automation',
					text: 'I implement task-specific automation: scripts and services with databases and integrations with external APIs and LLMs, plus web admin panels for setup and control.'
				},
				{
					tag: 'AI / agents',
					title: 'MCP servers and agent tools',
					text: 'I build MCP servers and tools for AI agents so LLMs can interact with business data and workflows, enabling agents to take real actions rather than only reply with text.'
				},
				{
					tag: 'Algo trading',
					title: 'Quantitative trading',
					text: 'I have %e% in quant trading and building trading bots, as well as integrating LLMs into trading/research pipelines with context enrichment from external data sources.',
					easter: 'successful experience'
				}
			],
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
				'Infrastructure and practices:',
				'AI / agent tooling:'
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
		var hrefs = ['#about_me', '#more_projects', '#principles', '#works', '#technical_part', '#contacts'];
		for (var i = 0; i < t.nav.length; i++) {
			html += '<a href="' + hrefs[i] + '"><li>' + t.nav[i] + '</li></a>';
		}
		$('.nav').html(html);
		$('.menu-hide nav ul').html(html);
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
				'#more_projects > h1',
				'#more_projects .more_projects_lead',
				'#more_projects .items .item .tag',
				'#more_projects .items .item .title',
				'#more_projects .items .item .regular',
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
				$(this).html(t.aboutParagraphs[i]);
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

		$('#more_projects > h1').text(t.moreProjectsHeading);
		$('#more_projects .more_projects_lead').text(t.moreProjectsLead);
		$('#more_projects .items .item').each(function (i) {
			if (!t.moreProjects[i]) return;
			var data = t.moreProjects[i];
			$(this).find('.tag').text(data.tag);
			$(this).find('.title').text(data.title);
			var $regular = $(this).find('.regular');
			if (data.easter) {
				var easterHtml =
					'<span class="trading-easter" tabindex="0">' +
					data.easter +
					'<span class="trading-easter__preview" aria-hidden="true">' +
					'<img src="/images/misc/income.jpg" alt="" loading="lazy">' +
					'</span></span>';
				$regular.html(data.text.split('%e%').join(easterHtml));
			} else {
				$regular.text(data.text);
			}
		});

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

	$(document).on('click', '.trading-easter', function (e) {
		if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
			return;
		}
		e.stopPropagation();
		var $egg = $(this);
		$('.trading-easter').not($egg).removeClass('is-open');
		$egg.toggleClass('is-open');
	});
	$(document).on('click', function () {
		$('.trading-easter').removeClass('is-open');
	});
})(jQuery);

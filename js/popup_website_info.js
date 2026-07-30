var SLICK_OPTIONS = {
	speed: 450,
	cssEase: 'ease-out',
	autoplay: false,
	infinite: true,
	pauseOnHover: true,
	autoplaySpeed: 4000,
	waitForAnimate: false
};

var ZOOM_HINT_STORAGE_KEY = 'prusov_popup_zoom_hint_seen';
var prefetchedImages = {};
var $lastPopupTrigger = null;

function getZoomHintText() {
	return document.documentElement.lang === 'en'
		? 'Click to enlarge'
		: 'Нажмите, чтобы увеличить';
}

function hasSeenZoomHint() {
	try {
		return localStorage.getItem(ZOOM_HINT_STORAGE_KEY) === '1';
	} catch (e) {
		return false;
	}
}

function markZoomHintSeen() {
	try {
		localStorage.setItem(ZOOM_HINT_STORAGE_KEY, '1');
	} catch (e) {}
}

function dismissZoomHint($popup) {
	var $hint = $popup.find('.popup_zoom_hint');
	if (!$hint.length) {
		return;
	}
	$hint.removeClass('is-visible');
	window.setTimeout(function() {
		$hint.remove();
	}, 280);
	$popup.find('.website_slider').off('.zoomHint');
}

function showZoomHint($popup) {
	if (hasSeenZoomHint()) {
		return;
	}
	var $slider = $popup.find('.website_slider');
	if (!$slider.length) {
		return;
	}

	var $hint = $slider.find('.popup_zoom_hint');
	if (!$hint.length) {
		$hint = $('<div class="popup_zoom_hint" role="status"></div>');
		$slider.append($hint);
	}

	$hint.text(getZoomHintText()).addClass('is-visible');
	markZoomHintSeen();

	$slider.off('.zoomHint').on('click.zoomHint', function() {
		dismissZoomHint($popup);
	});

	window.setTimeout(function() {
		dismissZoomHint($popup);
	}, 4500);
}

function getPopupKey($btn) {
	return ($btn.attr('class') || '')
		.split(/\s+/)
		.filter(function(name) {
			return name && name !== 'open_popup';
		})[0];
}

function getPopupFromButton($btn) {
	var key = getPopupKey($btn);
	return key ? $('.website_info_popup_' + key) : $();
}

function prefetchPopupImages($popup) {
	$popup.find('.website_slider img').slice(0, 2).each(function() {
		var src = $(this).attr('src');
		if (!src || prefetchedImages[src]) {
			return;
		}
		prefetchedImages[src] = true;
		$(this).removeAttr('loading');
		var img = new Image();
		img.src = src;
	});
}

function updateSlideCounter($popup, current, total) {
	var $counter = $popup.find('.popup_slide_counter');
	if (!$counter.length) {
		return;
	}
	if (total <= 1) {
		$counter.hide();
		return;
	}
	$counter.text((current + 1) + ' / ' + total).show();
}

function bindSlideCounter($popup, $slider) {
	var $counter = $popup.find('.popup_slide_counter');
	if (!$counter.length) {
		$counter = $('<div class="popup_slide_counter" aria-live="polite"></div>');
		$slider.append($counter);
	}
	$slider.off('afterChange.popupCounter').on('afterChange.popupCounter', function(event, slickInstance, currentSlide) {
		updateSlideCounter($popup, currentSlide, slickInstance.slideCount);
	});
	var slick = $slider.slick('getSlick');
	updateSlideCounter($popup, slick.currentSlide || 0, slick.slideCount);
}

function ensureSlider($popup) {
	var $slider = $popup.find('.website_slider');
	if (!$slider.length) {
		return $slider;
	}
	if (!$slider.hasClass('slick-initialized')) {
		$slider.slick(SLICK_OPTIONS);
		bindSlideCounter($popup, $slider);
	}
	return $slider;
}

function pausePopupSlider($popup) {
	var $slider = $popup.find('.website_slider');
	if ($slider.hasClass('slick-initialized')) {
		$slider.slick('slickPause');
	}
}

function preparePopupSlider($popup) {
	var $slider = ensureSlider($popup);
	if (!$slider.hasClass('slick-initialized')) {
		return;
	}
	if ($popup.data('sliderNeedsReset')) {
		$slider.slick('slickGoTo', 0, true);
		$popup.data('sliderNeedsReset', false);
		updateSlideCounter($popup, 0, $slider.slick('getSlick').slideCount);
	}
	$slider.slick('setPosition');
}

function startPopupSlider($popup) {
	var $slider = ensureSlider($popup);
	if (!$slider.hasClass('slick-initialized')) {
		return;
	}
	$slider.slick('setPosition');
	$slider.slick('slickPlay');
}

function focusPopupClose($popup) {
	$popup.find('.popup_exit_button')
		.attr({
			role: 'button',
			tabindex: '0',
			'aria-label': 'Закрыть'
		})
		.trigger('focus');
}

function closePopup($popup) {
	if (!$popup.length || !$popup.is(':visible')) {
		return;
	}
	pausePopupSlider($popup);
	$('body').css('overflow-y', 'visible');
	$popup.attr('aria-hidden', 'true');
	$popup.stop(true, false).slideUp('slow', function() {
		$popup.data('sliderNeedsReset', true);
		if ($lastPopupTrigger && $lastPopupTrigger.length) {
			$lastPopupTrigger.trigger('focus');
		}
	});
}

function openPopup($popup, $trigger) {
	if (!$popup.length) {
		return;
	}
	$lastPopupTrigger = $trigger || null;
	prefetchPopupImages($popup);
	$('body').css('overflow-y', 'hidden');
	$popup.attr({
		role: 'dialog',
		'aria-modal': 'true',
		'aria-hidden': 'false'
	});
	ensureSlider($popup);
	$popup.stop(true, false).slideDown({
		duration: 'slow',
		start: function() {
			preparePopupSlider($popup);
		},
		done: function() {
			startPopupSlider($popup);
			focusPopupClose($popup);
			showZoomHint($popup);
		}
	});
}

$('.open_popup')
	.attr({
		type: 'button',
		'aria-haspopup': 'dialog'
	})
	.on('mouseenter focus', function() {
		prefetchPopupImages(getPopupFromButton($(this)));
	})
	.on('click', function() {
		openPopup(getPopupFromButton($(this)), $(this));
	});

$('.popup_exit_button')
	.attr({
		role: 'button',
		tabindex: '0',
		'aria-label': 'Закрыть'
	})
	.on('click', function() {
		closePopup($(this).closest('.website_info_popup'));
	})
	.on('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			closePopup($(this).closest('.website_info_popup'));
		}
	});

$('.popup_exit').on('click', function() {
	closePopup($(this).closest('.website_info_popup'));
});

$(document).on('keydown', function(e) {
	if (e.key !== 'Escape') {
		return;
	}
	if (typeof Fancybox !== 'undefined' && Fancybox.getInstance()) {
		return;
	}
	var $open = $('.website_info_popup:visible').first();
	if ($open.length) {
		closePopup($open);
	}
});

$('.website_info_popup').attr('aria-hidden', 'true');

function getPopupGalleryItems($slider) {
	var items = [];
	var seen = {};
	var $imgs = $slider.hasClass('slick-initialized')
		? $slider.find('.slick-slide:not(.slick-cloned) img')
		: $slider.find('img');
	$imgs.each(function() {
		var src = $(this).attr('src');
		if (!src || seen[src]) {
			return;
		}
		seen[src] = true;
		items.push({ src: src, type: 'image' });
	});
	return items;
}

$(document).on('click', '.website_info_popup .website_slider img', function(e) {
	e.preventDefault();
	e.stopPropagation();

	var $img = $(this);
	var $slider = $img.closest('.website_slider');
	if (!$slider.hasClass('slick-initialized')) {
		return;
	}

	var items = getPopupGalleryItems($slider);
	if (!items.length) {
		return;
	}

	var startIndex = items.findIndex(function(item) {
		return item.src === $img.attr('src');
	});
	if (startIndex < 0) {
		startIndex = 0;
	}

	$slider.slick('slickPause');

	var lastIndex = startIndex;

	Fancybox.show(items, {
		startIndex: startIndex,
		Carousel: {
			infinite: true,
			transition: 'slide'
		},
		Images: {
			zoom: true
		},
		Toolbar: {
			display: {
				left: ['infobar'],
				middle: [],
				right: ['zoomIn', 'zoomOut', 'close']
			}
		},
		on: {
			'Carousel.ready Carousel.change': function(fancybox) {
				var slide = fancybox.getSlide();
				if (slide && typeof slide.index === 'number') {
					lastIndex = slide.index;
					$slider.slick('slickGoTo', lastIndex, true);
					updateSlideCounter(
						$slider.closest('.website_info_popup'),
						lastIndex,
						$slider.slick('getSlick').slideCount
					);
				}
			},
			close: function() {
				$slider.slick('slickGoTo', lastIndex, true);
				updateSlideCounter(
					$slider.closest('.website_info_popup'),
					lastIndex,
					$slider.slick('getSlick').slideCount
				);
			},
			destroy: function() {
				if ($slider.closest('.website_info_popup').is(':visible')) {
					$slider.slick('slickGoTo', lastIndex, true);
					updateSlideCounter(
						$slider.closest('.website_info_popup'),
						lastIndex,
						$slider.slick('getSlick').slideCount
					);
					$slider.slick('slickPlay');
				}
			}
		}
	});
});

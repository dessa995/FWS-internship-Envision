/** @description always include jQuery in this manner in every file where jQuery is used */
const $ = jQuery.noConflict();

/** @description import Global or some other files only if you need them */
import Global from '../shared/global';

'use strict';
const ResponsiveHeaderPosition = {
	/**
	 * @description Cache dom and strings
	 * @description Please always define selectors, classes and data attributes with the following prefixes
	 * @type {object}
	 * @param {jQuery} $dom     for any jQuery selectors    - example: $domMenu: $('.js-menu')
	 * @param {string} sl       for any string selectors    - example: slMenu: '.js-menu'
	 * @param {string} class    for any class strings       - example: classActive: 'is-active'
	 * @param {string} attr     for any attributes strings  - example: attrIndex: 'data-index'
	 */


	$domPreHeader: $('.js-pre-header'),
	/**
	 * @description Initialize
	 * @example this.someFunction();
	 */
	init: function() {
		this.scrollHeader();
	},

	scrollHeader: function() {
		let lastScrollTop = 0;
		const $windowWidth = $(window).width();
		let $headerPosition = $('.js-site-header').offset().top;

		$(window).on('scroll', function() {
			const $domHeader = $('.js-site-header');
			const $scrollValue = $(window).scrollTop();
			console.log('header position', $headerPosition);
			console.log($scrollValue);

			if ($headerPosition !== 0) {
				$headerPosition = 0;
			}

			if($scrollValue > $headerPosition) {
				$domHeader.addClass('is-sticky');
			} else {
				$domHeader.removeClass('is-sticky');
				$('.js-site-header').removeClass('green');
			}

			if ($scrollValue > lastScrollTop) {
				$('.js-pre-header').addClass('is-sticky');
				$('.js-site-header').addClass('is-sticky');
				$('.js-site-header').addClass('green');
				// if ($windowWidth > 580) {
				// 	$('.js-site-header').css('height', '80px');
				// } else {
				// 	$('.js-site-header').css('height', '65px');
				// }
			} else {
				$('.js-pre-header').removeClass('is-sticky');
				$('.js-site-header').removeClass('is-sticky');
                $('.js-preheader-button').animate({height: 40}, 350);

				// if ($windowWidth > 765) {
				// 	$('.js-site-header').css('height', '150px');
				// } else if ($windowWidth < 580) {
				// 	$('.js-site-header').css('height', '110px');
				// } else {
				// 	$('.js-site-header').css('height', '125px');
				// }
			}
			lastScrollTop = $scrollValue;
		});
	},

	someFunction: function(selector) {
		/** @description Global.varsWindowWidth; - this variable is called from global.js file */
		const ww = Global.varsWindowWidth;
		const something = selector.attr(this.attrExampleDataAttr);

		if (selector.hasClass(this.classExampleShow) && ww > 768) {
			console.log(something);
		}
	}
};

export default ResponsiveHeaderPosition;

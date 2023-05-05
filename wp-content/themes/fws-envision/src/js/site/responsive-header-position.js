/** @description always include jQuery in this manner in every file where jQuery is used */
const $ = jQuery.noConflict();

/** @description import Global or some other files only if you need them */
// import Global from '../shared/global';

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
		const $domHeader = $('.js-site-header');
		const $domPreHeader = $('.js-pre-header');
		const $headerPosition = $('.js-site-header').offset().top;

		if ($headerPosition !== 0) {
			$($domHeader).addClass('is-sticky');
			$($domPreHeader).addClass('is-sticky');
			$($domHeader).addClass('green');
		}

		$(window).on('scroll', function() {
			const $scrollValue = $(window).scrollTop();

			//$domHeader becomes transparent when on top of page with this if/else
			if($scrollValue <= 0) {
				$($domHeader).removeClass('is-sticky');
				$($domHeader).removeClass('green');
			} else {
				$($domHeader).addClass('is-sticky');
				$($domHeader).addClass('green');
			}

			//$domHeader becomes and remains green everywhere exept on top of page with this if/else
			if ($scrollValue > lastScrollTop) {
				$($domPreHeader).addClass('is-sticky');
				$($domHeader).addClass('is-sticky');
				$($domHeader).addClass('green');
			} else {
				$($domPreHeader).removeClass('is-sticky');
				$($domHeader).removeClass('is-sticky');
			}
			lastScrollTop = $scrollValue;
		});
	},
};

export default ResponsiveHeaderPosition;

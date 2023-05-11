/** @description always include jQuery in this manner in every file where jQuery is used */
const $ = jQuery.noConflict();

/** @description import Global or some other files only if you need them */

'use strict';

/** @description Helper Classes for creating base config options. */

const CountUp = {
	/**
	 * @description Cache dom and strings
	 * @description Please always define selectors, classes and data attributes with the following prefixes
	 * @type {object}
	 * @param {jQuery} $dom     for any jQuery selectors    - example: $domMenu: $('.js-menu')
	 * @param {string} sl       for any string selectors    - example: slMenu: '.js-menu'
	 * @param {string} class    for any class strings       - example: classActive: 'is-active'
	 * @param {string} attr     for any attributes strings  - example: attrIndex: 'data-index'
	 */



	/**
	 * @description Initialize
	 * @example this.someFunction();
	 */

	$domReviewsContainer: $('.js-reviews-container'),
	$domNumbers: $('.js-count-up'),
	//const $domNumbers = $('.js-count-up');

	init: function() {
		this.countUpAnimate();
	},

	countUpAnimate: function() {

		const target = document.querySelector('.js-reviews-container');

		const options = {
			root: document.querySelector('.js-reviews-container'),
			rootMargin: '0px',
			threshold: 1.0,
		};

		const animateNumbers = function() {
			console.log(target);
			$(this.$domNumbers).each(function() {
				$(this)
					.prop('Counter', 0)
					.animate({
						Counter: $(this).text(),
					},
					{
						duration: 4000,
						easing: 'swing',
						step: function(now) {
							now = Number(Math.ceil(now)).toLocaleString('en');
							$(this).text(now + '+');
						}
					});
			});
		};

		const observer = new IntersectionObserver(animateNumbers, options);

		observer.observe(target);
	}
};

export default CountUp;

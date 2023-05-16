/** @description always include jQuery in this manner in every file where jQuery is used */
const $ = jQuery.noConflict();

/** @description import Global or some other files only if you need them */

'use strict';
const TabChanger = {
	/**
	 * @description Cache dom and strings
	 * @description Please always define selectors, classes and data attributes with the following prefixes
	 * @type {object}
	 * @param {jQuery} $dom     for any jQuery selectors    - example: $domMenu: $('.js-menu')
	 * @param {string} sl       for any string selectors    - example: slMenu: '.js-menu'
	 * @param {string} class    for any class strings       - example: classActive: 'is-active'
	 * @param {string} attr     for any attributes strings  - example: attrIndex: 'data-index'
	 */

	$domDividers: $('.js-tab-divider'),
	$domTabCards: $('.js-tab-card'),

	/**
	 * @description Initialize
	 * @example this.someFunction();
	 */
	init: function() {
		this.switchTabs();
	},

	switchTabs: function() {
		$(this.$domDividers[0]).addClass('active');

		$('.js-tab-divider').on('click', function() {
			const tabIndex = $(this).index();
			$('.js-tab-card').attr('data-aos', 'flip-left');

			$('.js-tab-divider').removeClass('active');
			$(this).addClass('active');

			$('.js-tab-card').removeClass('active');
			$('.js-tab-card').eq(tabIndex).addClass('active');
			$('.js-tab-card').eq(tabIndex).removeClass('aos-animate');
			setTimeout(() => {
				$('.js-tab-card').eq(tabIndex).addClass('aos-animate');
			}, 50);

		});
	},
};

export default TabChanger;

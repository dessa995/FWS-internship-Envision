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

		$(this.$domDividers).on('click', function() {
			const tabIndex = $(this).index();
			if (tabIndex % 2 === 0) {
				$(TabChanger.$domTabCards).attr('data-aos', 'flip-right');
			} else {
				$(TabChanger.$domTabCards).attr('data-aos', 'flip-left');
			}

			$(TabChanger.$domDividers).removeClass('active');
			$(this).addClass('active');

			$(TabChanger.$domTabCards).removeClass('active');
			$(TabChanger.$domTabCards).eq(tabIndex).addClass('active');
			$(TabChanger.$domTabCards).eq(tabIndex).removeClass('aos-animate');
			setTimeout(() => {
				$(TabChanger.$domTabCards).eq(tabIndex).addClass('aos-animate');
			}, 50);

		});
	},
};

export default TabChanger;

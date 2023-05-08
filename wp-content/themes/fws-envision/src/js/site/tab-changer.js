/** @description always include jQuery in this manner in every file where jQuery is used */
const $ = jQuery.noConflict();

/** @description import Global or some other files only if you need them */
import Global from '../shared/global';

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
			console.log(tabIndex);

			$('.js-tab-divider').removeClass('active');
			$(this).addClass('active');

			$('.js-tab-card').removeClass('active');
			$('.js-tab-card').eq(tabIndex).addClass('active');

			/**
			 * @description When keyword 'this' is no longer pointing to the main object, like in this scenario,
				please use the variable name of the main object in order to access it( in an example below we are using 'ExampleFile.someFunction()'
				instead of 'this.someFunction()').
			 */
			// ExampleFile.someFunction($(this));


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

export default TabChanger;

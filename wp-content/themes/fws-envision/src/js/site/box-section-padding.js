/** @description always include jQuery in this manner in every file where jQuery is used */
const $ = jQuery.noConflict();

'use strict';
const BoxSectionPadding = {

	$domBoxSection: $('.js-box-container'),
	$domTabBottom: $('.js-tab-bottom'),

	/**
	 * @description Initialize
	 * @example this.someFunction();
	 */
	init: function() {
		this.calculatePadding();

		$(window).on('resize', function() {
			BoxSectionPadding.calculatePadding();
		});
	},

	calculatePadding: function() {
		setTimeout(function() {
			const tabsBottom = $(BoxSectionPadding.$domTabBottom).offset().top;
			const boxSectionTop = $(BoxSectionPadding.$domBoxSection).offset().top;
			const padding = tabsBottom - boxSectionTop;

			console.log(Math.round(padding) + 50);

			$(BoxSectionPadding.$domBoxSection).css({'padding-top': (Math.round(padding) + 50) + 'px'});

		}, 800);

	},
};

export default BoxSectionPadding;

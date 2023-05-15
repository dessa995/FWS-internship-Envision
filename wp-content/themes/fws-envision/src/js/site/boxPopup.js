/** @description always include jQuery in this manner in every file where jQuery is used */
const $ = jQuery.noConflict();

/** @description import Global or some other files only if you need them */
import Global from '../shared/global';


'use strict';
const BoxPopup = {

	$domBox: $('.js-box'),
	$domBoxHeading: $('.js-box-heading'),
	$domBoxText: $('.js-box-text'),
	$domBoxLink: $('.js-box-link'),
	$domPopupBox: $('.js-popup'),
	$domPopupHeading: $('.js-popup-heading'),
	$domPopuptext: $('.js-popup-text'),
	$domPopupClose: $('.js-close-popup'),

	init: function() {
		this.showPopup();
	},

	showPopup: function() {
		$(this.$domBoxLink).each(function() {
			$(this).on('click', function() {
				BoxPopup.$domPopupBox.addClass('active');
				$(BoxPopup.$domPopupHeading).text($(this).siblings().children('h3').text());
				$(BoxPopup.$domPopuptext).text($(this).siblings().children('p').text());
			});
		});

		const callback = function() {
			BoxPopup.$domPopupBox.removeClass('active');
		};

		$(this.$domPopupClose).on('click', function() {
			callback();
			console.log('called upon');
		});

		Global.clickOutsideContainer($(window), BoxPopup.$domPopupBox, BoxPopup.$domPopupClose, callback);
	},

};

export default BoxPopup;

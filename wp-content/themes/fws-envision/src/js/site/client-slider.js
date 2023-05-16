const $ = jQuery.noConflict();
import 'slick-carousel';

'use strict';

/** @description Helper Classes for creating base config options. */
class SliderBaseConfig {
	constructor(slidesToShow = 1, slidesToScroll = 1, speed = 2000, rows = 0) {
		this.slidesToShow = slidesToShow;
		this.slidesToScroll = slidesToScroll;
		this.speed = speed;
		this.rows = rows;
	}
}

const ClientSlider = {
	/** @description Cache dom and strings. */
	$domSlider: $('.js-client-slider'),

	/** @description Initialize. */
	init: function() {
		this.initGallerySlider();
	},

	/** @description Set and run gallery slider. */
	initGallerySlider: function() {
		// create object with base config options
		const baseConfig = new SliderBaseConfig();
		// set extra config options
		const extraConfig = {
			autoplaySpeed: 3000,
			infinite: true,
			autoplay: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			centerMode: true,
			variableWidths: true,
			arrows: false,
			responsive: [
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 1
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 1
					}
				}
			]
		};
		// merge two config objects
		const config = {
			...baseConfig,
			...extraConfig
		};
		// run slider
		this.runSlider(this.$domSlider, config);
	},

	/** @description Loop through sliders and run. */
	runSlider: ($slider, config) => {
		$slider.each((i, el) => {
			$(el).slick(config);
		});
	}
};

export default ClientSlider;

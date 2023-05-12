const $ = jQuery.noConflict();

'use strict';


const CountUp = {


	$domReviewsContainer: $('.js-reviews-container'),
	$domNumbers: $('.js-count-up'),
	//const $domNumbers = $('.js-count-up');

	init: function() {
		this.countUpAnimate();
	},

	countUpAnimate: function() {
		this.handelIntersectionObserver();
	},

	handelIntersectionObserver: function() {
		const options = {
			root: document,
			rootMargin: '0px',
			threshold: 1.0,
		};

		const targets = document.querySelectorAll('.js-count-up');

		const activeNumber = (target) => {
			const numObserver = new IntersectionObserver((entries, observer) => {
				entries.forEach(entry => {
					// console.log(entry);
					if (entry.isIntersecting) {
						this.animateNumbers();
					}
				});
			}, options);
			numObserver.observe(target);
		};

		targets.forEach(activeNumber);
	},

	animateNumbers: function() {
		// $(CountUp.$domNumbers).each(function() {
		// 	const $this = $(this);
		// 	console.log($this);
		// 	jQuery({Counter: 0}).animate({Counter: $this.text()}, {
		// 		duration: 4000,
		// 		easing: 'swing',
		// 		step: function() {
		// 			$this.text(Math.ceil(this.Counter));
		// 		}
		// 	});
		// });

		$(CountUp.$domNumbers).each(function() {
			const $this = $(this);
			$(this)
				.prop('Counter', 0)
				.animate({
					Counter: $($this).text(),
				},
				{
					duration: 6000,
					easing: 'swing',
					step: function(now) {
						now = Number(Math.ceil(now)).toLocaleString('en');
						$($this).text(now);
					}
				});
		});
	},
};

export default CountUp;

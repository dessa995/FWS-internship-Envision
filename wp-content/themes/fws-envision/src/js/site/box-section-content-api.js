/** @description always include jQuery in this manner in every file where jQuery is used */
const $ = jQuery.noConflict();

'use strict';
const BoxContent = {
	/**
	 * @description Cache dom and strings
	 * @description Please always define selectors, classes and data attributes with the following prefixes
	 * @type {object}
	 * @param {jQuery} $dom     for any jQuery selectors    - example: $domMenu: $('.js-menu')
	 * @param {string} sl       for any string selectors    - example: slMenu: '.js-menu'
	 * @param {string} class    for any class strings       - example: classActive: 'is-active'
	 * @param {string} attr     for any attributes strings  - example: attrIndex: 'data-index'
	 */

	$domBoxHeading: $('.js-box-heading'),
	$domBoxText: $('.js-box-text'),


	/**
	 * @description Initialize
	 * @example this.someFunction();
	 */
	init: function() {
		this.generateContent();
	},

	fetchContent: async function() {

		const response = await fetch('https://jsonplaceholder.typicode.com/posts?id=0&id=1&id=2&id=3&id=4&id=5&id=6&id=7');
		const data = await response.json();
		console.log(data);

		data.forEach(post => {
			console.log(post.title);
		});
	},

	generateContent: function() {
		this.fetchContent();
	},
};

export default BoxContent;

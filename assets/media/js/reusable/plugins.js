(function(factory) {
	if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} else if (typeof module === 'object' && module.exports) {
		module.exports = function(root, jQuery) {
			if (jQuery === undefined) {
				if (typeof window !== 'undefined') {
					jQuery = require('jquery');
				}
				else {
					jQuery = require('jquery')(root);
				}
			}
			factory(jQuery);
			return jQuery;
		};
	} else {
		factory(jQuery);
	}
}(function($) {
	'use strict';
	
	$.getYandexMetrikaIds = function () {
		try {
			var ids = [];
			
			Ya.Metrika.counters().forEach(function (counter) {
				ids.push(counter['id']);
			});
			
			return ids;
		} catch (err) {
			return [];
		}
	}
	
}));
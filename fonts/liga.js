/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
	'use strict';
	function supportsProperty(p) {
		var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
			i,
			div = document.createElement('div'),
			ret = p in div.style;
		if (!ret) {
			p = p.charAt(0).toUpperCase() + p.substr(1);
			for (i = 0; i < prefixes.length; i += 1) {
				ret = prefixes[i] + p in div.style;
				if (ret) {
					break;
				}
			}
		}
		return ret;
	}
	var icons;
	if (!supportsProperty('fontFeatureSettings')) {
		icons = {
			'coin-dollar': '&#xe600;',
			'money': '&#xe600;',
			'clock': '&#xe601;',
			'time2': '&#xe601;',
			'rocket': '&#xe602;',
			'jet': '&#xe602;',
			'play3': '&#xe606;',
			'player8': '&#xe606;',
			'pause2': '&#xe607;',
			'player9': '&#xe607;',
			'stop2': '&#xe608;',
			'player10': '&#xe608;',
			'backward2': '&#xe609;',
			'player11': '&#xe609;',
			'forward3': '&#xe60a;',
			'player12': '&#xe60a;',
			'facebook3': '&#xe603;',
			'brand8': '&#xe603;',
			'twitter3': '&#xe604;',
			'brand13': '&#xe604;',
			'github4': '&#xe605;',
			'brand43': '&#xe605;',
			'0': 0
		};
		delete icons['0'];
		window.icomoonLiga = function (els) {
			var classes,
				el,
				i,
				innerHTML,
				key;
			els = els || document.getElementsByTagName('*');
			if (!els.length) {
				els = [els];
			}
			for (i = 0; ; i += 1) {
				el = els[i];
				if (!el) {
					break;
				}
				classes = el.className;
				if (/icon-/.test(classes)) {
					innerHTML = el.innerHTML;
					if (innerHTML && innerHTML.length > 1) {
						for (key in icons) {
							if (icons.hasOwnProperty(key)) {
								innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
							}
						}
						el.innerHTML = innerHTML;
					}
				}
			}
		};
		window.icomoonLiga();
	}
}());
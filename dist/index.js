'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Button = require('components/Button');



Object.keys(Button).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () { return Button[k]; }
	});
});

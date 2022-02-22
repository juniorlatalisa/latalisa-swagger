'use strict';

const SwaggerUI = function() {

	let swaggerUIBundle = null

	function _load(e, url, layout) {
		const ui = SwaggerUIBundle({
			url: url,
			dom_id: '#swagger-ui',
			deepLinking: true,
			presets: [
				SwaggerUIBundle.presets.apis,
				SwaggerUIStandalonePreset
			],
			plugins: [
				SwaggerUIBundle.plugins.DownloadUrl
			],
			layout: layout
		});
		console.debug(e, ui);
		swaggerUIBundle = ui;
	}

	return Object
		.freeze({
			load: _load,
			ui: () => swaggerUIBundle
		});
}();
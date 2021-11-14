QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"fedorenko_ma/webapp/test/integration/NavigationJourney"
	], function () {
		QUnit.start();
	});
});
sap.ui.define([
	"sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
	"use strict";

	new ComponentContainer({
		viewName: "fedorenko_ma.webapp",
		settings : {
			id : "walkthrough"
		},
		async: true
	}).placeAt("content");
});
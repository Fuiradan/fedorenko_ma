sap.ui.define([
	"sap/m/Image",
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/core/HTML"
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("fedorenko_ma.lab10.controller.HelloPanel", {

		onShowHello : function () {
			// read msg from i18n model
		//	this.getView().byId("fio").setHtmlText("<a>Федоренко Максим Алексеевич</a>");
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/recipient/name");
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);

			// show message
			MessageToast.show(sMsg);
		},
		onInit : function(){
    		this.getView().byId("fio").setHtmlText("<a>Федоренко Максим Алексеевич</a>");
}
		 
	});


});
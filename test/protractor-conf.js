var chai = require("chai");
var protractor = require("protractor");

exports.config = {
	seleniumAddress: "http://localhost:4444/wd/hub",
	baseUrl: "https://pasta.lab.epam.com/",
	capabilities: {
		browserName: process.env.BROWSER
	},
	framework: "custom",
	frameworkPath: require.resolve("protractor-cucumber-framework"),
	specs: ['features/*.feature'],
	onPrepare: function() {
		global.expect = chai.expect;
		global.EC = protractor.ExpectedConditions;
		browser.ignoreSynchronization = true;
	},
	cucumberOpts: {
		strict: true,
		format: ["pretty"],
		require: ["step_definitions/*.js", "support/*.js"],
		tags: process.env.TAGS
	}
};

var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given}) {

	Given(/^I navigate to the '(.+)' page$/, function (page) {
        var _this = this;
        return _this.browserUtils.navigateTo(page);
    });
   

});

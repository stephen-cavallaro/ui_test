const GoogleHomePage = require('../pages/googlehome.page');

describe('search google', () => {
	context('find facebook', () => {
		before('search for facebook', () => {
			GoogleHomePage.open();
			GoogleHomePage.search('Facebook');
		})

		it('should return facebook as first result', () => {
			
			// console.log("THIS IS SELECTOR", $(".iUh30"))
			// console.log("THIS IS GET TEXT", $(".iUh30").getText())
			expect($(".iUh30").getText()).to.contains("www.facebook.com");

		});
	})

});
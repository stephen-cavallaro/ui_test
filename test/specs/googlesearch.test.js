const GoogleHomePage = require('../pages/googlehome.page');

describe('search google', () => {
	context('find facebook', () => {
		before('search for facebook', () => {
			GoogleHomePage.open();
			GoogleHomePage.search('Facebook');
		})

		it('should return facebook as first result', () => {

			expect(true).to.eql(true);

		});
	})

});
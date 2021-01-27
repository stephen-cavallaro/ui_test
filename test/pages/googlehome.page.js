const Page = require('../../page');

class GoogleHomePage extends Page {
    get inputSearch () { return $(".gLFyf") }
    get submitButton () { return $(".gNO89b") }
    
    search (query) {
        this.inputSearch.setValue(query);
        this.submitButton.click(); 
    }
 
    open () {
        return super.open();
    }
}

module.exports = new GoogleHomePage();

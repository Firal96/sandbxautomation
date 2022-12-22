

const Page = require('./page');

class GooglePage extends Page {

    get searchBar () {
        return $('[name="q"]');
    }

    get searchButton () {
        return $('input[type="submit"]');
    }

    async search (phrase) {
        await this.searchBar.setValue(phrase)
        browser.keys("\uE007");
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

module.exports = new GooglePage();

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    open (path) {
        return browser.url(`https://www.google.com/`)
    }

    async waitForElementLoading(element){
        await browser.waitUntil(async () => (await element.isExisting()))
    }
}

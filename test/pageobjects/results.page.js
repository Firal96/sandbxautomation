

const Page = require('./page');

class ResultsPage extends Page {
    get results () {
        return $$('[data-sokoban-container] a:has(h3)');
    }

    async pickResult(position){
        await browser.waitUntil(async () => (this.results[0].isExisting()))
        const url = await this.results[position].getAttribute('href');
        browser.newWindow(url)
    }
}

module.exports = new ResultsPage();

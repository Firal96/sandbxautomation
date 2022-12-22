const GooglePage = require('../pageobjects/google.page')
const ResultsPage = require('../pageobjects/results.page')

describe('Open second result', () => {
    it('should search for selenium and open the second result', async () => {
        await GooglePage.open()
        await GooglePage.search('Selenium')
        await ResultsPage.pickResult(1)
        await expect(browser).toHaveTitleContaining('Selenium')
    })
})



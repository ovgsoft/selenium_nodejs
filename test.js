require('chromedriver');
const assert = require('assert');
const {
    Builder,
    Key,
    By,
    until
} = require('selenium-webdriver');
describe('Checando Google.com', function () {
    let driver;
    before(async function () {
        driver = await new Builder().forBrowser('chrome').build();
    });
    it('Buscar en Google', async function () {
        await driver.get('https://www.google.com/advanced_search');
        await driver.findElement(By.name('as_q')).click();
        await driver.findElement(By.name('as_q')).sendKeys('WIMO', Key.RETURN);
        // await driver.wait(until.elementLocated(By.id('rcnt')), 10000);
        // let title = await driver.getTitle();
        // assert.equal(title, 'WIMO - Google Search');
    });
    // after(() => driver && driver.quit());
})
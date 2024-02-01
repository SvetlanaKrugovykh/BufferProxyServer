const puppeteer = require('puppeteer')

async function captureScreenshot(url, username, password) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.authenticate({ username, password })
  await page.goto(url)

  const screenshotBuffer = await page.screenshot({ fullPage: true })

  await browser.close()
  return screenshotBuffer
}


module.exports = { captureScreenshot }

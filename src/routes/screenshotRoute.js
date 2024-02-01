const { captureScreenshot } = require('../controllers/screenshotController')

function screenshotRoute(fastify, options, done) {
  fastify.post('/screenshot', async (request, reply) => {
    const { url, login, password } = request.body

    try {
      const screenshotBuffer = await captureScreenshot(url, login, password)
      const screenshotBase64 = screenshotBuffer.toString('base64')
      reply.send({ image: screenshotBase64 })
    } catch (error) {
      reply.status(500).send({ error: 'Failed to capture screenshot' })
    }
  })

  done()
}

module.exports = screenshotRoute

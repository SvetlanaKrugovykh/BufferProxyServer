require('dotenv').config()
const Fastify = require('fastify')
const screenshotRoute = require('./routes/screenshotRoute')
const PORT = process.env.PORT || 8982
const HOST = process.env.HOST || '127.0.0.1'

const app = Fastify({
  trustProxy: true
})

app.register(screenshotRoute)

app.listen({ port: process.env.PORT || 8080, host: HOST }, (err, address) => {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }

  console.log(`${new Date()}:[API] Service listening on ${address}`)
})


require('dotenv').config()
const fastify = require('fastify')()
const screenshotRoute = require('./routes/screenshotRoute')

fastify.register(screenshotRoute)
const PORT = process.env.PORT || 8982

fastify.listen(PORT, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening on ${address}`)
})

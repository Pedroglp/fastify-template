const { db, logger } = require('./config/enviroment')
const fastify = require('fastify')({logger})
const routes = require('./api/routes.js')

fastify.register(require('fastify-mongodb'), {...db})

fastify.register(require('./config/routes-connector.js'), routes)


const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
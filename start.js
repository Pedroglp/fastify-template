const { db, logger } = require('./config/env')
const fastify = require('fastify')({logger})
const routes = require('./api/routes.js')
const schemas = require('./api/schemas/index.js')

fastify.register(require('fastify-mongodb'), {...db})

fastify.register(require('./config/schemas-connector.js'), schemas)

fastify.register(require('./config/routes-connector.js'), routes)


const start = async () => {
  try {
    await fastify.listen(3000, '0.0.0.0')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
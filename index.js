const { db, logger, jwt } = require('./config/enviroment')
const fastify = require('fastify')({logger})
const routes = require('./api/routes.js')

fastify.register(require('fastify-mongodb'), {...db})

fastify.register(require('./config/routes-connector.js'), routes)

fastify.register(require('fastify-jwt'), {...jwt})


const start = async () => {
  try {
    await fastify.listen(3000, '0.0.0.0')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
const { db, logger, jwt } = require('./config/env')
const fastify = require('fastify')({logger})
const routes = require('./api/routes.js')
const bcrypt = require('bcrypt')

fastify.register(require('fastify-mongodb'), {...db})

fastify.register(require('./config/routes-connector.js'), routes)

fastify.register(require('fastify-jwt'), {...jwt})

fastify.decorate('bcrypt', bcrypt)

const start = async () => {
 try {
    await fastify.listen(3000, '0.0.0.0')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
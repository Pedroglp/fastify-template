const fastifyPlugin = require('fastify-plugin')

async function schemasConnector(fastify, schemas) {
  schemas.forEach(schema => {
    fastify.addSchema(schema)
  });
}

module.exports = fastifyPlugin(schemasConnector)
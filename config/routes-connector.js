const fastifyPlugin = require('fastify-plugin')

async function routesConnector(fastify, routes) {
  routes.forEach(route => {
    fastify.route(route)
  });
}

module.exports = fastifyPlugin(routesConnector)
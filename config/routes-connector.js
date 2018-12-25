const fastifyPlugin = require('fastify-plugin')

async function routesConnector(fastify, routes) {
  const database = fastify.mongo.db('db')

  routes.forEach(route => {
    route.handler.database = database;
    fastify.route(route)
  });
}

module.exports = fastifyPlugin(routesConnector)
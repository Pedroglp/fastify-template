const fastifyPlugin = require('fastify-plugin')
const mongoose = require('mongoose')

async function routesConnector(fastify, config) {
  // configs has: mongo address for connection and 
  const {models, db} = config
  // TODO check how to pass db configs or acess it through fastify
  mongoose.connect(db.url, db.config)
  models.forEach(model => {
    mongoose.model(model.name, model.schema)
  });
  fastify.decorate('mongoose',)
}

module.exports = fastifyPlugin(routesConnector)
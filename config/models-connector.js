const fastifyPlugin = require('fastify-plugin')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

async function routesConnector(fastify, models) {
  mongoose.connections.push(fastify.mongo)
  models.forEach(model => {
    const modelSchema = new Schema(model.schema)
    modelSchema.method(model.methods || {})
    mongoose.model(model.name, modelSchema)
  });
  fastify.decorate('mongoose', mongoose)
  fastify.decorate('models', mongoose.models)
}

module.exports = fastifyPlugin(routesConnector)
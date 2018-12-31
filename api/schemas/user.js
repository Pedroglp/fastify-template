// https://www.fastify.io/docs/v2.0.x/Validation-and-Serialization/
module.exports = {
  response: {
    200: {
      type: 'object',
      properties: {
        users: { type: 'array' },
      }
    }
  }
}
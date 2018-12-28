// https://www.fastify.io/docs/v2.0.x/Validation-and-Serialization/
module.exports = {
  body: {
    type: 'object',
    properties: {
      username: { type: 'string' },
      password: { type: 'string' },
      email: { type: 'string' },
    }
  },

  params: {
    type: 'object',
    properties: {
      par1: { type: 'string' },
    }
  },

  response: {
    200: {
      type: 'object',
      properties: {
        username: { type: 'string' },
        email: { type: 'string' },
        msg: { type: 'string' }
      }
    }
  }
}
// HANDLERS
const helloWorldHandler = require('./handlers/helloWorld.js')
const myRouteHandler = require('./handlers/my-route.js')

// SCHEMAS
/** const mySchema = require('./schemas/mySchema.js) */

// HOOKS
/** const myHook = require('./hooks/myHook.js) */

// https://www.fastify.io/docs/latest/Routes/
module.exports = [
  { method: 'GET', path: '/', handler: helloWorldHandler},
  { method: 'GET', path: '/test/:id', handler: myRouteHandler}
]
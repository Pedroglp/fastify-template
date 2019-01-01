// HANDLERS
const helloWorldHandler = require('./handlers/helloWorld.js')
const getMyModelHandler = require('./handlers/get-my-model.js')
const addMyModelHandler = require('./handlers/add-my-model.js')

// SCHEMAS
/** const mySchema = require('./schemas/mySchema.js) */

// HOOKS
/** const myHook = require('./hooks/myHook.js) */

// https://www.fastify.io/docs/latest/Routes/
module.exports = [
  { method: 'GET', path: '/', handler: helloWorldHandler},
  { method: 'GET', path: '/test/:something', handler: getMyModelHandler},
  { method: 'POST', path:'/test', handler: addMyModelHandler}
]
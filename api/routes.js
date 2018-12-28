// HANDLERS
const helloWorldHandler = require('./handlers/helloWorld.js')
const myRouteHandler = require('./handlers/my-route.js')

// SCHEMAS
<<<<<<< Updated upstream
/** const mySchema = require('./schemas/mySchema.js) */
=======
const signupSchema = require('./schemas/signup.js')
>>>>>>> Stashed changes

// HOOKS
/** const myHook = require('./hooks/myHook.js) */

// https://www.fastify.io/docs/latest/Routes/
module.exports = [
<<<<<<< Updated upstream
  { method: 'GET', path: '/', handler: helloWorldHandler},
  { method: 'GET', path: '/test/:id', handler: myRouteHandler}
=======
  { method: 'POST', path: '/signup', handler: signupHandler, schema: signupSchema},
  { method: 'POST', path: '/auth', handler: authHandler},
  { method: 'GET', path: '/users', handler: userHandler, beforeHandler: checkAuth}
>>>>>>> Stashed changes
]
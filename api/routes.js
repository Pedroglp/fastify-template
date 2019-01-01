// HANDLERS
const signupHandler = require('./handlers/signup.js')
const authHandler = require('./handlers/auth.js')
const userHandler = require('./handlers/users.js')

// SCHEMAS
const signupSchema = require('./schemas/signup.js')

// HOOKS
const checkAuth = require('./hooks/checkAuth.js')
const checkRole = require('./hooks/checkRole.js')
const basicAuth = require('./hooks/basicAuth.js')

// https://www.fastify.io/docs/latest/Routes/
module.exports = [
  { method: 'POST', path: '/signup', handler: signupHandler, schema: signupSchema},
  { method: 'GET', path: '/auth', handler: authHandler, beforeHandler: basicAuth},
  { method: 'GET', path: '/users', handler: userHandler, beforeHandler: [checkAuth, checkRole]}
]
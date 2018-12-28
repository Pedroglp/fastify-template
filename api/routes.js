// HANDLERS
const signupHandler = require('./handlers/singup.js')
const authHandler = require('./handlers/auth.js')
const userHandler = require('./handlers/users.js')

// SCHEMAS

// HOOKS
const checkAuth = require('./hooks/checkAuth.js')

// https://www.fastify.io/docs/latest/Routes/
module.exports = [
  { method: 'POST', path: '/signup', handler: signupHandler},
  { method: 'POST', path: '/auth', handler: authHandler},
  { method: 'GET', path: '/users', handler: userHandler, beforeHandler: checkAuth}
]
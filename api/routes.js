// HANDLERS
const signupController = require('./controllers/singup.js')
const authController = require('./controllers/auth.js')
const userController = require('./controllers/users.js')

// HOOKS
const checkAuth = require('./hooks/checkAuth.js')

// https://www.fastify.io/docs/latest/Routes/
module.exports = [
  { method: 'POST', path: '/signup', handler: signupController},
  { method: 'POST', path: '/auth', handler: authController},
  { method: 'GET', path: '/users', handler: userController, beforeHandler: checkAuth}
]
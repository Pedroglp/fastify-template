const signupController = require('./controllers/singup.js')
const authController = require('./controllers/auth.js')

// https://www.fastify.io/docs/latest/Routes/
module.exports = [
  { method: 'POST', path: '/signup', handler: signupController},
  { method: 'POST', path: '/auth', handler: authController}
]
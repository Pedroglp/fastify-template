const helloWorldController = require('./controllers/helloWorld.js')
const myRouteController = require('./controllers/my-route.js')
const signupController = require('./controllers/singup.js')

// https://www.fastify.io/docs/latest/Routes/
module.exports = [
  { method: 'GET', path: '/', handler: helloWorldController},
  { method: 'GET', path: '/test/:id', handler: myRouteController},
  { method: 'POST', path: '/signup', handler: signupController}
]
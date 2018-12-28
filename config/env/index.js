if(process.env.NODE_ENV === 'development') {
  module.exports = require('./development.js')
}

if(process.env.NODE_ENV === 'production') {
  module.exports = require('./production.js')
}

if(process.env.NODE_ENV === 'stage') {
  module.exports = require('./stage.js')
}

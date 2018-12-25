if(process.env.NODE_ENV === 'development') {
  module.exports = require('./development')
}

if(process.env.NODE_ENV === 'production') {
  module.exports = require('.production')
}

if(process.env.NODE_ENV === 'stage') {
  module.exports = require('./stage')
}

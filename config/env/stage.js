module.exports = {
  logger: true,
  db: {
    url: 'mongodb://fastify:password@localhost:27017/admin',
    config: {
      useNewUrlParser: true,
    }
  },
  jwt: {
    secret: 'WnLWOapc1S2jXviivQhXdf7YbgeITrXH'
  }
}
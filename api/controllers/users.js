module.exports = async function(request, reply) {
  const usersCursor = await this.mongo.db.collection('users').find({})
  const usersList = await usersCursor.toArray()

  return reply.code(202).send(usersList)
}
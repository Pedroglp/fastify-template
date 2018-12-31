// TODO: use schemas for response
module.exports = async function(request, reply) {
  // console.log(request.user);
  // in user you can access jwt after auth
  // this can be useful to check roles/permissions per user
  const usersCursor = await this.mongo.db.collection('users').find({})
  const usersList = await usersCursor.toArray()

  return reply.code(202).send(usersList)
}
async function myRoute (request, reply) {
  const collection = this.mongo.db.collection('test')
  const result = await collection.findOne({ id: parseInt(request.params.id) })
  return reply.send(result)
}

module.exports = myRoute
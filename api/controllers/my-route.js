async function myRoute (request, reply) {
  const collection = database.collection('test')
  const result = await collection.findOne({ id: request.params.id })

  if (result.value === null) {
    throw new Error('Invalid value')
  }
  
  reply.send(result.value)
}

module.exports = myRoute
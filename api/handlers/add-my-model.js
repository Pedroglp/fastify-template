async function addMyModel (request, reply) {
  const { myModel } = this.models
  const { name, something } = request.body
  myTestModel = new myModel({name, something})
  
  const result = await myTestModel.save()
  return reply.send(result)
}

module.exports = addMyModel
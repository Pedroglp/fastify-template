async function getMyModel (request, reply) {
  const { myModel } = this.models
  const something = parseInt(request.params.something)
  result = await myModel.findOne({ something }).maxTime(1000)
  result.test()
  result.saySomething()
  return reply.send(result)
}

module.exports = getMyModel
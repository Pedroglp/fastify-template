module.exports = async function(request, reply) {
  console.log('pre handler')
  try {
    console.log('try')
    await request.jwtVerify()
  } catch (err) {
    console.log('catch')
    reply.send(err)
  }
}
module.exports = async function(request, reply) {
  try {
    const headerString = request.headers.authorization.split('Basic ')[1]
    const decryptedArray = Buffer.from(headerString, 'base64').toString('ascii').split(':')
    const basicAuth = {
      username: decryptedArray[0],
      password: decryptedArray[1]
    }
    request.basicAuth = basicAuth;
  } catch (err) {
    reply.send(err)
  }
}
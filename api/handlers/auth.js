module.exports = async function(request, reply) {
    const {username, password} = request.basicAuth
    const users = this.mongo.db.collection('users') 
    
    // checks if user exists
    const user = await users.findOne({username})
    if(!!!user) {
        return reply.code(404).send({msg:'User not found.'})
    }

    // check if password matchs
    try {
      const authorized = await this.bcrypt.compare(password, user.passwordHash)
      if(authorized) {
        const token = {
          userId: user._id,
          expiresIn: '1d',
          roles: ['admin']
        }
        return reply.code(202).send({msg: 'Successfully logged in.', token: this.jwt.sign(token)})
      } else {
        return reply.code(404).send({msg:'Login failed: incorrect username or password.'})
      }
    } catch(error) {
      throw new Error('Error while logging in. ')
    }
}
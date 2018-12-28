module.exports = async function(request, reply) {
    const {username, password, email} = request.body
    const users = this.mongo.db.collection('users')
    const passwordHash = await this.bcrypt.hash(password, 5)
    
    // checks if email/username is already in use
    const user = await users.findOne({$or:[{email}, {username}]})
    
    if(!!user) {
        return reply.code(409).send({msg: `${user.email === email ? 
            'E-mail already in use.' 
            : 'Username already in use.'}`})
    }
    users.insert({username, passwordHash, email})
    
    return reply.code(202).send({ msg: 'Successfully registred.', username, email })
}
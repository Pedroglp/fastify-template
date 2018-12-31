module.exports = async function(request, reply) {
    // example to do role based actions
    if(request.user.roles.includes('admin')) {
        console.log('admin')
    } else {
        console.log('normal user')
    }
}
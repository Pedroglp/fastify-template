module.exports.name = 'myModel'

module.exports.schema = {
    name: String,
    something: Number,
}

module.exports.methods = {
    test: function() {
        console.log('testing methods')
    },
    saySomething: function() {
        console.log(this.something)
    }
}
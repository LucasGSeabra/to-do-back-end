const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = mongoose.connect("mongodb+srv://admin:admin@ldnm.i3jjc.mongodb.net/to-do?retryWrites=true&w=majority")
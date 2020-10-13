import mongoose from 'mongoose'

mongoose.Promise = global.Promise

const uri = "mongodb+srv://admin:admin@ldnm.i3jjc.mongodb.net/to-do?retryWrites=true&w=majority"

mongoose.connect(uri, {useNewUrlParser: true})

export default mongoose
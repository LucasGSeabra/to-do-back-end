import mongoose from 'mongoose'

async function dbConnect() {

    mongoose.Promise = global.Promise
    await mongoose.connect(process.env.DB_URI, {useNewUrlParser: true})

    return mongoose

}

export default dbConnect
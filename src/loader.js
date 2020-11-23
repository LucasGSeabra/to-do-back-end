import server from './config/server.js'
import dotenv from 'dotenv'
import dbConnect from './config/database.js'
import routes from './config/routes/routes.js'

dotenv.config()
dbConnect()
routes(server)


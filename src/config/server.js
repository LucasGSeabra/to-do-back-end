import express from 'express'
import bodyParser from 'body-parser'
import cors from './cors.js'

const port = (process.env.PORT || 3003)

const server = express()

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(cors)

server.listen(port, function() {
    console.log(`running on port ${port}`)
})

export default server
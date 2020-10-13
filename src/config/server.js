import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const port = 3003

const server = express()

server.use(cors)
server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())

server.listen(port, function() {
    console.log('running on port 3003')
})

export default server
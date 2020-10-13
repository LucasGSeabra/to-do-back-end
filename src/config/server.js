import express from 'express'
import bodyParser from 'body-parser'

const port = 3003

const server = express()

server.use(bodyParser.urlencoded({
    extended: true
}))
server.use(bodyParser.json())

server.listen(port, function() {
    console.log('running on port 3003')
})

export default server
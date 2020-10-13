import express from 'express'
import todoService from '../../api/todo/todoService.js'

export default (server) => {
    const router = express.Router()
    server.use('/api', router)

    todoService.register(router, '/todos')    
}
import http from 'node:http'
import path from 'node:path'
import {serveStatic} from './utils/serveStatic.js'
const PORT = 8000
const __dirname = import.meta.dirname

const server = http.createServer(async (req,res) => {
    

    serveStatic(req, res, __dirname)


})

server.listen(PORT, ()=> console.log(`Connected to PORT:${PORT}`))
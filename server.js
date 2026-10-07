import http from 'node:http'
import {serveStatic} from './utils/serveStatic.js'
import { saveData } from './utils/saveData.js'
import {handlePriceUpdate} from './handlers/routeHandlers.js'
const PORT = 8000
const __dirname = import.meta.dirname

const server = http.createServer(async (req,res) => {

    if(req.url === '/save-data' && req.method === 'POST'){
        await saveData(req,res, __dirname)
    }
    else if(req.url === '/price' && req.method === 'GET'){
        handlePriceUpdate(res)
    }
    else if(req.url != '/save-data'){
        return await serveStatic(req, res, __dirname)
    }
})

server.listen(PORT, ()=> console.log(`Connected to PORT:${PORT}`))
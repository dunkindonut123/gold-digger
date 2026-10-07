import path from 'node:path'
import fs from 'node:fs/promises'
import {getFileType} from './getFileType.js'
import {sendResponse} from './sendResponse.js'

export async function serveStatic(req, res, __dirname){
    const public_path = path.join(__dirname, 'public')
    const path_to_resource = path.join(public_path, req.url === '/'? 'index.html' : req.url)

    const ext = path.extname(path_to_resource)
    const content_type = getFileType(ext)

    try {
        const data = await fs.readFile(path_to_resource)
        sendResponse(res, 200, content_type, data)
    } catch(err){
        const data = await fs.readFile(path.join(public_path, '404.html'))
        sendResponse(res,404, 'text/html', data)
    }
}
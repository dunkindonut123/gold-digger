import path from 'node:path'
import fs from 'node:fs/promises'

export async function serveStatic(req, res, __dirname){
    const public_path = path.join(__dirname, 'public')
    const path_to_resource = path.join(public_path, req.url)

    const data = await fs.readFile(path_to_resource)
    res.end(data)

}
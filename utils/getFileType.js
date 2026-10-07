import path from 'node:path'

export function getFileType(ext){
    const file_types = {
        '.json': 'application/json',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.txt': 'text/plain',
        '.png': 'image/png',
        '.jpeg': 'image/jpeg',
        '.pdf': 'application/pdf',
        ".svg": "image/svg+xml"

    }
    return file_types[ext] || 'text/html'
}
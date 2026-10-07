

export function sendResponse(res, statusCode, content_type, data){
    res.statusCode = statusCode
    res.setHeader('Content-Type', content_type)
    res.end(data)
}
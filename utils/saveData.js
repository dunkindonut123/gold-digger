import fs from 'node:fs/promises'
import path from 'node:path'
import { sendResponse } from './sendResponse.js'

export async function saveData(req,res, __dirname){
    const path_to_data = path.join(__dirname, 'data', 'invest_data.txt')

    let body = ''
    for await (const chunk of req){
        body += chunk
    }
    try {
        await fs.appendFile(path_to_data, body + '\n')
        sendResponse(res, 200, 'text/plain', body)
    }catch (err){
        sendResponse(res, 400, 'application/json', err)
    }


    // try{
    // } catch(err){
    //     console.log('failed to add to data')
    // }

}
import { getGoldPrice } from "../utils/getGoldPrice.js"

export function handlePriceUpdate(res){
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/event-stream')
    res.setHeader('Cache-Control', 'no-cache')
    res.setHeader('Connection', 'keep-alive')

    setInterval(() => {
        const gold_price = getGoldPrice()
        res.write(
            `data: ${JSON.stringify({
                event: 'price-update',
                price: gold_price
            })}\n\n`
        )
    }, (3000));
}
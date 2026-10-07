
export function getGoldPrice(){
    let curr_price = (Math.random() * (2200 - 1800 + 1)) + 1800
    curr_price = curr_price.toFixed(2)
    curr_price = Number(curr_price)
    return curr_price
}
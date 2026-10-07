

const form = document.getElementById('form')
const investment_amount = document.getElementById('investment-amount')
const priceEl = document.getElementById('price-display')

form.addEventListener('click', async function(e){
    e.preventDefault()
    if(e.target.id === 'invest-btn'){
        console.log(typeof investment_amount.value)
        if(investment_amount.value === ""){
            console.log('not defined')
        }else{
            const date = new Date()
            const curr_time = date.toISOString()
            const value = investment_amount.value
            let curr_price = Number(priceEl.textContent)
            console.log(curr_price)
            const sold = Number((value /curr_price).toFixed(2))
            const data = `${curr_time}, amount paid: £${value}, price per Oz: £${curr_price}, gold sold: ${sold}Oz`
    
            try{
                const res = await fetch('./save-data',{
                    method: "POST", 
                    headers: {'Content-Type': 'text/plain'}, 
                    body: JSON.stringify(data)
                }) 
                if(res.ok){
                    console.log('success')
                }
            }catch(err){
                console.log('error')
            }
        }        
    }
})



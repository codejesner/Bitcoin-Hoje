const spanMarket = document.getElementById("market")
const spanHigh = document.getElementById("high")
const spanLow = document.getElementById("low")
const spanVar = document.getElementById("var")
const spanBuy = document.getElementById("buy")
const spanSell = document.getElementById("sell")
const spanLast = document.getElementById("last")
const spanTimeStamp = document.getElementById("timestamp")

function getData() {
    fetch("https://api.bitpreco.com/btc-brl/ticker")
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        const { market, high, low, var:varia, buy, sell, last, timestamp } = data
        showHTML(market, high, low, varia, buy, sell, last, timestamp)
    })
}


function showHTML (market, high, low, varia, buy, sell, price, timestamp) {
    spanMarket.innerHTML = formatCurrency(market)
    spanHigh.innerHTML = "Maxima <br>" + formatCurrency(high)
    spanLow.innerHTML =  "Minima <br>" + formatCurrency(low)
    spanVar.innerHTML = "Variação <br>" + varia
    spanBuy.innerHTML = "Compra <br>" + formatCurrency(buy)
    spanSell.innerHTML = "Venda <br>" + formatCurrency(sell)
    spanLast.innerHTML = "Ultimo Preco <br>" + formatCurrency(price)
    spanTimeStamp.innerHTML = "Ultima Atualização <br>" + timestamp;
}

function formatCurrency(value) {
    return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
}

setInterval(getData, 10000)
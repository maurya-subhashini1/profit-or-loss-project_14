const intialPrice = document.querySelector("#intial-price")
const quantityStocks = document.querySelector("#quantity-price")
const currentPrice = document.querySelector("#current-price")
const button = document.querySelector("#tell-button")
const showResult = document.querySelector("#output-show")


button.addEventListener("click", clickHandler)

function clickHandler() {
    var intialValue = Number(intialPrice.value)
    var currentVlaue = Number(currentPrice.value)
    var quantityValue = Number(quantityStocks.value)
    calculatingLossAndProfit(intialValue, currentVlaue, quantityValue)
}


function calculatingLossAndProfit(inital, quantity, current) {
    // console.log("clicked")
    if (inital > current) { //lose
        var lose = (inital - current) * quantity
        var losePercentage = (lose / inital) * 100
        showOutput(`Hey the loss is ${lose} and the percent is ${losePercentage}%`)


    } else if (current > inital) { //profit
        var profit = (current - inital) * quantity
        var profitPercentange = (profit / inital) * 100
        showOutput(`Hey the Profit is ${profit} and the percent is ${profitPercentange}%`)


    }else {
        showOutput('No pain no gain and no gain no pain')

    }

}


function showOutput(message){
    showResult.innerHTML=message
}
var initialPrice = document.querySelector("#initial-price");
var quantityStocks = document.querySelector("#stock-quantity");
var currentPrice = document.querySelector("#current-price");
var checkBtn = document.querySelector("#check-btn");
var outputDiv = document.querySelector(".output");


function calculateProfitAndLoss(initial, quantity, current){

    if(initial < 0 || quantity< 0 || current < 0){
        outputDiv.innerText = "Enter correct amount";
    }

    else{

        if(initial > current){
            var loss = (initial - current)* quantity;
            var lossPercent = (loss/(initial*quantity))* 100;
            outputDiv.innerText = ` Hey loss is ₹${loss} and loss percent is ${lossPercent}%`;
        }
        else if(initial < current){
            var profit = (current - initial)* quantity;
            var profitPercent = (profit/(initial* quantity))* 100;
        outputDiv.innerText = `Hey your profit is ₹${profit} and profit percent is ${profitPercent}%`;
        }
        else{
            outputDiv.innerText= "Lala Risk hai to Ishq hai";
        }
    }
    
}

function clickHandler(){
    var initialPriceValue = Number(initialPrice.value);
    var quantityStocksValue = Number(quantityStocks.value);
    var currentPriceValue = Number(currentPrice.value);

    calculateProfitAndLoss(initialPriceValue, quantityStocksValue, currentPriceValue);
}


checkBtn.addEventListener('click', clickHandler);



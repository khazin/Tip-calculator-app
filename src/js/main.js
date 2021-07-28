let billInput = document.querySelector('#billInput');
let peopleInput = document.querySelector('#peopleInput');
let customTipInput = document.querySelector('#customTipInput');
let totalPriceOutput = document.querySelector('#totalPriceOutput');
let totalTipOutput = document.querySelector('#totalTipOutput');

let value = '';
let billValue = '';
let peopleValue = '';
let customTipPercValue = '';
let tipPercValue = '';

setInterval(() => {
    document.addEventListener('click', (e) => {
        let element = e.target;
        // console.log(e.target);
        if (element.classList.contains('tip--input') &&
        element.classList.contains('-button')
        ) {
            tipPercValue =  parseInt(e.target.value)/100;
            // alert(tipPercValue);
        }

        if (element.id == 'resetButton') {
            billValue = 0;
            peopleValue = 0;
            customTipPercValue = 0;
            tipPercValue = 0;

            billInput.value = 0;
            peopleInput.value = 0;
            customTipInput.value = '';

            totalPriceOutput.innerHTML = '$0.00';
            totalTipOutput.innerHTML = '$0.00';
        }
    })
    
    document.addEventListener('keyup', (e) => {
        let element = e.target;
      
    
        if (
            //e.key == 'Enter' && 
        element.tagName == 'INPUT') {
            value = element.value;
        }
        if (element.id == 'billInput') {
            billValue = value;
            // alert(billValue);
        }
        if (element.id == 'customTipInput') {
            customTipPercValue = value;
            tipPercValue = customTipPercValue/100;
            // alert(tipPercValue);
        }
        if (element.id == 'peopleInput') {
            peopleValue = value;
            // alert(peopleValue);
        }
    
    })
    let totalTips = (billValue * (tipPercValue)) / peopleValue;
    let totalValue = (billValue * (1+tipPercValue)) / peopleValue;
    if (!isNaN(totalTips)) {
        totalTipOutput.innerHTML = '$'+totalTips.toFixed(2);
    }
    if (!isNaN(totalValue)) {
        totalPriceOutput.innerHTML = '$'+totalValue.toFixed(2);
    }
}, 1000);

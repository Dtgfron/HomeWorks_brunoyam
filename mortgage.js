
function getPayment() {
    debugger
    let sum = Number(document.querySelector('.sumPrice').value);
    let downPayment = Number(document.querySelector('.downPayment1').value);
    let period = Number(document.querySelector('.period1').value);
    let rate = 6.9;
    const i = (rate / 12) / 100;
    const coefficient = (i * (Math.pow(1 + i, period * 12))) / (Math.pow(1 + i, period * 12) - 1);
    let result = (sum - downPayment) * coefficient;
    let finalResult = result.toFixed(0);
    
    document.querySelector('.result').innerHTML = String(finalResult);
}


document.querySelector('.calc-btn').addEventListener('click',getPayment);







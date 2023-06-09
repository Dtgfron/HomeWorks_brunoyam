
function getPayment() {
    debugger
    const resultElement = document.querySelector('.result');
    const resultElement2 = document.querySelector('.sumPriceForUser');
    const sum = Number(document.querySelector('.sumPrice').value);
    const downPayment = Number(document.querySelector('.downPayment1').value);
    const period = Number(document.querySelector('.period1').value);
    const rate = 6.9;
    const i = (rate / 12) / 100;
    const coefficient = (i * (Math.pow(1 + i, period * 12))) / (Math.pow(1 + i, period * 12) - 1);
    const sumCredit = sum - downPayment;
    const result = sumCredit * coefficient;
    const finalResult = result.toFixed(0);

    resultElement.classList.remove('result--black');
    resultElement.classList.remove('result--red');
    if (finalResult >= 50000) {
    resultElement.innerHTML = String(finalResult);
    resultElement.classList.add('result--red');
    resultElement2.innerHTML = String(sumCredit);
    } else if (finalResult < 50000) {
    resultElement.innerHTML = String(finalResult);
    resultElement.classList.add('result--black');
    resultElement2.innerHTML = String(sumCredit);  
    }

    
}


document.querySelector('.calc-btn').addEventListener('click',getPayment);







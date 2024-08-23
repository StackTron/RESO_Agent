function calculate(type) {
    let result;
    let cost;

    if (type === 'osago') {
        cost = document.getElementById('osago').value;
        result = cost * 0.1;
        document.getElementById('osago-result').innerText = `Прибыль агента: ${result.toFixed(2)} руб.`;
    } else if (type === 'kasko') {
        cost = document.getElementById('kasko').value;
        result = cost * 0.25;
        document.getElementById('kasko-result').innerText = `Прибыль агента: ${result.toFixed(2)} руб.`;
    }
}

function calculateCustom() {
    const amount = document.getElementById('custom-amount').value;
    const percent = document.getElementById('custom-percent').value;

    if (amount && percent) {
        const profit = amount * (percent / 100);
        document.getElementById('custom-result').innerText = `Прибыль: ${profit.toFixed(2)} руб.`;
    } else {
        document.getElementById('custom-result').innerText = `Пожалуйста, введите сумму и процент.`;
    }
}
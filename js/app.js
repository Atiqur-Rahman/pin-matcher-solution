function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';

    if (pinString.length == 4) {
        return pin;
    } else {
        // console.log(pin, ' is not 4 digit and calling the getPin function again');
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    const previousValue = calcInput.value;

    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        } else if (number === '<') {
            const digits = previousValue.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            calcInput.value = remainingDigits;
        }
    } else {
        const newValue = previousValue + number;
        calcInput.value = newValue;
    }
});

function verrifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;

    const successMessage = document.getElementById('notify-success');
    const errorMessage = document.getElementById('notify-fail');

    if (pin == typedNumbers) {
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
    } else {
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
}

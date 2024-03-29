function onlyNumbers(event) {
    const key = event.key;
    return (key >= '0' && key <= '9') || key === '.' || key === '-';
}

function clearFields() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').value = '';
}

function add() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if (!isNaN(num1) && !isNaN(num2)) {
        document.getElementById('result').value = num1 + num2;
    } else {
        alert('Please enter valid numbers');
    }
}

function subtract() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if (!isNaN(num1) && !isNaN(num2)) {
        document.getElementById('result').value = num1 - num2;
    } else {
        alert('Please enter valid numbers');
    }
}

function multiply() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if (!isNaN(num1) && !isNaN(num2)) {
        document.getElementById('result').value = num1 * num2;
    } else {
        alert('Please enter valid numbers');
    }
}

function divide() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if (!isNaN(num1) && !isNaN(num2)) {
        if (num2 === 0) {
            alert('Cannot divide by zero');
        } else {
            document.getElementById('result').value = num1 / num2;
        }
    } else {
        alert('Please enter valid numbers');
    }
}
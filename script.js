// Append character to the display
function appendCharacter(char) {
    document.getElementById('display').value += char;
}

// Clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Delete the last character
function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculateResult() {
    try {
        const display = document.getElementById('display');
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

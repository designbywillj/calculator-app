let operand = []

function updateDisplay() {
    displayText.innerText = operand.join('')
}

function clear() {
    operand = [0]
    updateDisplay()
}

function compute() {
    displayText.innerText = eval(operand.join(''))
    operand = [displayText.innerText]
}

const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const clearButton = document.querySelector('[data-clear]')
const equalsButton = document.querySelector('[data-equals]')
const displayText = document.querySelector('[data-display]')

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (operand[0] == 0) {
            operand[0] = button.innerText // Need to add check for extra decimal
        } else {
            operand.push(button.innerText)
        }
        updateDisplay()
    })
})

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        let lastOperand = operand[operand.length - 1]
        if (lastOperand === '+' || lastOperand === '-' || lastOperand === '*' || lastOperand === '/') {
            return
        } else {
            operand.push(button.innerText)
            updateDisplay()
        }
    })
})

clearButton.addEventListener('click', () => {
    clear()
})

equalsButton.addEventListener('click', () => {
    compute()
})
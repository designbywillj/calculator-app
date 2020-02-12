// class Calculator {
//     constructor(previousOperandText, currentOperandText) {
//         this.previousOperandText = previousOperandText
//         this.currentOperandText = currentOperandText
//         this.clear()
//     }

//     clear() {
//         this.currentOperand = 0
//         this.previousOperand = ''
//         this.operation = undefined
//     }

//     appendNumber(number) {
//         if (number === '.' && this.currentOperand.includes('.')) return
//         if (this.currentOperand == 0) this.currentOperand = ''
//         this.currentOperand = this.currentOperand + number.toString()
//     }

//     chooseOperation(operation) {
//         if (this.currentOperand === '') return
//         if (this.previousOperand !== '') {
//             this.compute()
//         }
//         this.operation = operation
//         this.previousOperand = this.currentOperand
//         this.currentOperand = ''
//     }

//     compute() {
//         let computation
//         const previous = parseFloat(this.previousOperand)
//         const current = parseFloat(this.currentOperand)
//         if (isNaN(previous) || isNaN(current)) return
//         switch (this.operation) {
//             case '+':
//                 computation = previous + current
//                 break
//             case '−':
//                 computation = previous - current
//                 break
//             case '×':
//                 computation = previous * current
//                 break
//             case '÷':
//                 computation = previous / current
//                 break
//             default:
//                 return
//         }
//         this.currentOperand = computation
//         this.operation = undefined
//         this.previousOperand = ''
//     }

//     updateDisplay() {
//         this.currentOperandText.innerText = this.currentOperand
//         if (this.operation != null) {
//             this.previousOperandText.innerText = 
//                 `${this.previousOperand} ${this.operation}`
//         } else {
//             this.previousOperandText.innerText = ''
//         }
//     }
// }

// const numberButtons = document.querySelectorAll('[data-number]')
// const operationButtons = document.querySelectorAll('[data-operation]')
// const clearButton = document.querySelector('[data-clear]')
// const equalsButton = document.querySelector('[data-equals]')
// const previousOperandText = document.querySelector('[data-previous-operand]')
// const currentOperandText = document.querySelector('[data-current-operand]')

// const calculator = new Calculator(previousOperandText, currentOperandText)

// numberButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         calculator.appendNumber(button.innerText)
//         calculator.updateDisplay()
//     })
// })

// operationButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         calculator.chooseOperation(button.innerText)
//         calculator.updateDisplay()
//     })
// })

// equalsButton.addEventListener('click', button => {
//     calculator.compute()
//     calculator.updateDisplay()
// })

// clearButton.addEventListener('click', button => {
//     calculator.clear()
//     calculator.updateDisplay()
// })
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
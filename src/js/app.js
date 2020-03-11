// app.js

import Calculator from './main.js'

let calculator = new Calculator()




// // Define initial expression
// let operand = []

// // Update display with joined array of input values
// function updateDisplay() {
//     displayText.value = operand.join('')
// }

// // Clear stored input values and display
// function clear() {
//     operand = []
//     updateDisplay()
// }

// // Compute the joined array of input values
// function compute() {
//     displayText.value = eval(displayText.value)
//     operand = [displayText.value]
// }

// // Button elements
// const numberButtons = document.querySelectorAll('[data-number]')
// const operatorButtons = document.querySelectorAll('[data-operator]')
// const clearButton = document.querySelector('[data-clear]')
// const equalsButton = document.querySelector('[data-equals]')
// const displayText = document.querySelector('[data-display]')

// // Listen to number button clicks
// numberButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         if (operand[0] == 0) {
//             operand[0] = button.innerText // Need to add check for extra decimal
//         } else {
//             operand.push(button.innerText)
//         }
//         updateDisplay()
//     })
// })

// // Listen to operator button clicks
// operatorButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         let lastOperand = operand[operand.length - 1]
//         if (lastOperand === '+' || lastOperand === '-' || lastOperand === '*' || lastOperand === '/') {
//             return
//         } else {
//             operand.push(button.innerText)
//             updateDisplay()
//         }
//     })
// })

// // Listen to clear button clicks
// clearButton.addEventListener('click', () => {
//     clear()
// })

// // Listen to equal button clicks
// equalsButton.addEventListener('click', () => {
//     compute()
// })
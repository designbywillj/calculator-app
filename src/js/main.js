// app.js

import Button from "./controllers/button.js"

export default class Calculator {
    _buttons = []
    _display
    _expression

    constructor() {
        // Get list of all buttons
        const buttonNodeList = document.querySelectorAll('.btn')
        
        for (let i = 0; i < buttonNodeList.length; ++i) {
            this._buttons[i] = new Button(buttonNodeList[i])
        }

        console.log('Calculator constructed!')
    }
}
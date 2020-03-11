// button.js

export default class Button {
    _type
    _value

    constructor(button) {
        // Get data-type value from DOM ref
        this._type = button.dataset.type
        this._value = button.textContent

        // Listen for button clicks
        button.addEventListener('click', () => {
            console.log(this._type)
            console.log(this._value)
        })
    }
}
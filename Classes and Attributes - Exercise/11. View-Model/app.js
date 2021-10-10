class Textbox {
    constructor(selector, regex){
        this.selector = selector;
        this._invalidSymbols = regex;
        
        this._elements = document.querySelectorAll(selector)
        this._elements[0].addEventListener('input', () => {
            this._elements[1].value = this._elements[0].value;
            this._value = this._elements[0].value
        })
    }
    get value(){
        return this._value
    }
    set value(newValue){
        Array.from(this._elements).forEach((el) => (el.value = newValue))
        this._value = newValue
    }

    get elements() {
        return this._elements
    }
    isValid(){
       return ! this.value.match(this._invalidSymbols)
    }
}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('.textbox');

inputs.addEventListener('click',function(){console.log(textbox.value);});
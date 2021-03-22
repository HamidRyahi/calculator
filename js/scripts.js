let history = document.querySelector('.history');
let textDisplay = document.querySelector('.text-display');
const buttons = document.querySelectorAll('.calculator div');
let number1 = undefined;
let number2 = undefined;
let result;
let number1FirstClick = true;
let number2FirstClick = true;
let currentOperation = ''
let operator;
let dotFirstClick = true
let sliceFirst = true
let isOn = false
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function handleSubmit() {
        if (buttons[i].id === 'clear') {
            number1 = undefined
            number2 = undefined
            result = undefined
            number1FirstClick = true
            number2FirstClick = true
            currentOperation = ''
            operator = undefined
            dotFirstClick = true
            sliceFirst = true
            isOn = false
            textDisplay.innerHTML = '0'
            history.innerHTML = '.'
            console.log('1')
        }
        if (buttons[i].id === 'equal') {
            console.log('2')
            if (number1 && number2) {
                console.log('3')
                history.innerHTML = `${number1} ${operator} ${number2} =`;
                console.log(currentOperation)
                result = eval(currentOperation)
                textDisplay.innerHTML = result;
                console.log(eval(currentOperation))
            } else {
                console.log('4')
                history.innerHTML = `${result} ${buttons[i].innerHTML}`;
                number1FirstClick = true
                number2FirstClick = true
            }
        }
        if (buttons[i].classList.contains('operator')) {
            console.log('5')
            console.log(result)
            if (number1 && number2) {
                console.log('6')
                history.innerHTML = `${number1} ${buttons[i].innerHTML}`;
                result = eval(currentOperation)
                textDisplay.innerHTML = result;
                number1 = result
                number2 = 0
                currentOperation = `${number1} ${buttons[i].innerHTML} `
                isOn = true
                number1FirstClick = false
                number2FirstClick = true
            }
            if (result !== undefined) {
                console.log('6')
                history.innerHTML = `${result} ${buttons[i].innerHTML}`;
                number1 = result
                number2 = 0
                currentOperation = `${number1} ${buttons[i].innerHTML} `
                isOn = true
                textDisplay.innerHTML = result;
            } else {
                console.log('7')
                history.innerHTML = `${number1} ${buttons[i].innerHTML}`;
                operator = buttons[i].innerHTML
                currentOperation += buttons[i].innerHTML
                number1FirstClick = false
                number2FirstClick = true
            }
            console.log('8')
            buttons[17].style.pointerEvents = ''
            dotFirstClick = true
        }
        if (buttons[i].classList.contains('number')) {
            if (number1FirstClick) {
                console.log('9')
                if (buttons[i].id === 'dot' && dotFirstClick) {
                    textDisplay.innerHTML += buttons[i].innerHTML
                    currentOperation += buttons[i].innerHTML
                    number1 = Number(textDisplay.innerHTML)
                    console.log('num1', number1)
                    buttons[i].style.pointerEvents = 'none'
                    dotFirstClick = false
                } else {
                    if (sliceFirst) {
                        console.log('10')
                        textDisplay.innerHTML = textDisplay.innerHTML.slice(0, -1)
                    }
                    console.log('10-1')
                    textDisplay.innerHTML += buttons[i].innerHTML
                    currentOperation += buttons[i].innerHTML
                    number1 = Number(textDisplay.innerHTML)
                    console.log('num1', number1)
                    sliceFirst = false
                }
            } else {
                if (buttons[i].id === 'dot' && dotFirstClick) {
                    console.log('11')
                    textDisplay.innerHTML += buttons[i].innerHTML
                    currentOperation += buttons[i].innerHTML
                    number2 = Number(textDisplay.innerHTML)
                    console.log('num2', number2)
                    buttons[i].style.pointerEvents = 'none'
                    dotFirstClick = false
                } else {
                    if (number2FirstClick) {
                        console.log('12')
                        textDisplay.innerHTML = buttons[i].innerHTML
                        currentOperation += buttons[i].innerHTML
                        number2 = Number(textDisplay.innerHTML)
                        console.log('num2', number2)
                        number2FirstClick = false
                    } else {
                        if (isOn) {
                            console.log('13')
                            textDisplay.innerHTML = ''
                            isOn = false
                        }
                        textDisplay.innerHTML += buttons[i].innerHTML
                        currentOperation += buttons[i].innerHTML
                        number2 = Number(textDisplay.innerHTML)
                    }
                }
            }
        }
        console.log(currentOperation)
    })
}
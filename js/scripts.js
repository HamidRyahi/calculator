const buttons = document.querySelectorAll('.calculator div');
const result = document.querySelector('.text-display');
const clear = document.querySelector('.clear');

let sum = 0;
let part1 = '0';
let previousClick = '';
let isSubFirst = true;
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        if ((buttons[i].innerHTML === '=') && (previousClick === 'add')) {
            sum += Number(part1);
            console.log('sum', sum)
            part1 = ''
            result.innerHTML = sum;
        }
        if ((buttons[i].innerHTML === '=') && (previousClick === 'sub')) {
            sum -= Number(part1);
            console.log('sum', sum)
            part1 = ''
            result.innerHTML = sum;
        }
        if (buttons[i].innerHTML === 'C') {
            sum = 0;
            part1 = '';
            result.innerHTML = sum;
            isSubFirst = true
        }
        if (buttons[i].innerHTML === 'del') {
            console.log('del', part1)
            part1 = part1.slice(0, -1)
            console.log('del', part1)
            console.log(typeof (part1))
            result.innerHTML = part1;
        }

        if (buttons[i].innerHTML === '+') {
            sum += Number(part1);
            console.log('sum', sum)
            part1 = ''
            result.innerHTML = sum;
            previousClick = 'add'
        }
        if (buttons[i].innerHTML === '-') {
            console.log(part1)
            part1 = part1 * -1;
            console.log(part1)
            sum -= Number(part1);
            console.log('sum', sum)
            part1 = ''
            result.innerHTML = sum;
            previousClick = 'sub'
        }
        if (buttons[i].classList.contains('number')) {
            if ((buttons[i].id = 'sub') && (isSubFirst === true)) {
                console.log('sub is clicked')
                part1 = part1.slice(0, -1)
                part1 += buttons[i].innerHTML
                result.innerHTML = part1;
                isSubFirst = false;
            } else if (buttons[i].classList.length === 1) {
                console.log('i am a number')
                part1 += buttons[i].innerHTML
                console.log(part1)
                result.innerHTML = part1;
            }
        }
    })
}

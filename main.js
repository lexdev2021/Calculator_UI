let a = '';
let operation = '';
let b = '';
let result = 0;
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const action = ['÷', '×', '–', '+'];
const buttons = document.querySelectorAll('.btn');
const output = document.querySelector('.calc-window');

function Calc (a, operation, b) {
    const operations = {
        '–' : a - b,
        '+' : +a + +b,
        '×' : a * b,
        '÷' : a / b,
    }
    return operations[operation];
}

function delAll() {
    a = '';
    operation = '';
    b = '';
    result = 0;
    output.textContent = 0;
}

function delElement() {
    const length = output.textContent.length;
    if (a !== '' && operation === '') {
        a = a.slice(0, a.length - 1);
        output.textContent = output.textContent.slice(0, length - 1);
    
    } else if (operation !== '' && b === '') {
        operation = operation.slice(0, operation.length - 1);
        output.textContent = output.textContent.slice(0, length - 1);
       
    } else 
        b = b.slice(0, b.length - 1);
        output.textContent = output.textContent.slice(0, length - 1); 
}
   
for (let el of buttons) {
    
    el.addEventListener('click', function(event) {    
        
        const input = event.currentTarget.textContent;
        
        if (numbers.includes(input)) {
            if (operation === '' && b === '') {
                a += input; 
                output.textContent = a;
            } else if (a !== '' && operation !== '') {
                b += input;  
                output.textContent = a + operation + b;
            }
        } 

        if(action.includes(input)) {
            operation = input;
            output.textContent = a + operation;

        }

        if(input === '=') {
            result = output.textContent = Calc(a, operation, b);
            if(result !== '') {
                a = '';
                b = '';
                operation = '';
            }
        }

        if(input === 'C') {
            delAll();
        }

        if(input === '⌫') {
            delElement();
        }
    } )
}


    




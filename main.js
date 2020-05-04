const backBtn = document.getElementById('back');
const clearBtn = document.getElementById('clear');
const numBtn = document.querySelectorAll('#num');
const equalBtn = document.getElementById('equal');
const percentBtn = document.getElementById('percent');
const operatorBtn = document.querySelectorAll('#opr');

let inputView = document.getElementById('inputview');


clearBtn.addEventListener('click', Clear);
backBtn.addEventListener('click', Del);
percentBtn.addEventListener('click', percentage);
equalBtn.addEventListener('click', equal);



for (let i = 0; i < numBtn.length; i++) {
    numBtn[i].addEventListener('click', number);
    
}

for (let i = 0; i < operatorBtn.length; i++) {
    operatorBtn[i].addEventListener('click', operator);    
}

function number() {
    inputView.value = document.getElementById('inputview').value + this.textContent;
}

function operator() {
    if (inputView.value != '') {
        inputView.value = document.getElementById('inputview').value + this.textContent;
    }
}

function percentage() {
    inputView.value = inputView.value/100;
}

function Clear() {
    inputView.value = '';
}

function Del() {
    let outPut = document.getElementById('inputview').value;
    inputView.value = outPut.substring(0, outPut.length-1);
}

function equal() {
    if (inputView.value) {
        inputView.value = eval(inputView.value);
    }
}

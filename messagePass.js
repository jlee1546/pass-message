const button = document.querySelector(".button");
const erase = document.querySelector(".erase");
//const display = document.querySelector(".display-message");
//const input = document.querySelector(".input");

function writeMessage() {
    const message = document.querySelector('.input').value;
    const display = document.querySelector('.display-message');
    display.textContent = message;
}
function eraseMessage() {
    const message = document.querySelector('.input');
    const display = document.querySelector('.display-message');
    message.value = '';
    display.textContent = '';
}

button.addEventListener('click', writeMessage);
erase.addEventListener('click',eraseMessage);

const button1 = document.getElementById('btn1');
button1.addEventListener('click', function() {
    button1.style.backgroundColor = 'red';
    button1.innerText = 'You clicked on button 1';
});

const button2 = document.getElementById('btn2');
button2.addEventListener('click', function() {
    button2.style.backgroundColor = 'green';
    button2.innerText = 'you clicked on button 2';
});

const button3 = document.getElementById('btn3');
button3.addEventListener('click', function() {
    button3.style.backgroundColor = 'blue';
    button3.innerText = 'you clicked on button 3';
});


function changeTextAndSize(buttonId) {
    const button4 = document.getElementById(buttonId);

    button4.innerHTML = 'თქვენ დააჭირეთ ' + buttonId;

    button4.style.fontSize = '24px';
}
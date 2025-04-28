const child = document.getElementById('child');
const parent = document.querySelector('.parent');

let x = 0;
let y = 0;
let direction = 'down';

const move = setInterval(function () {
    if (direction === 'down') {
        y += 5;
        if (y >= 400) {
            direction = 'right';
        }
    } else if (direction === 'right') {
        x += 5;
        if (x >= 400) {
            direction = 'up';
        }
    } else if (direction === 'up') {
        y -= 5;
        if (y <= 0) {
            direction = 'left';
        }
    } else if (direction === 'left') {
        x -= 5;
        if (x <= 0) {
            x = 0;
            y = 0;
            direction = 'down';
        }
    }

    child.style.left = `${x}px`;
    child.style.top = `${y}px`;
}, 20);

const child = document.getElementById('child');
const parent = document.querySelector('.parent');

let x = 0;
let y = 0;
let direction = 'right';

const move = setInterval(function() {
    if (direction === 'right') {
        x += 5;
        if (x >= 400) {
            direction = 'down';
        }
    } else if (direction === 'down') {
        y += 5;
        if (y >= 400) {
            direction = 'left';
        }
    } else if (direction === 'left') {
        x -= 5;
        if (x <= 0) {
            direction = 'up';
        }
    } else if (direction === 'up') {
        y -= 5;
        if (y <= 0) {
            x = 0;
            y = 0;
            direction = 'right';
        }
    }

    child.style.left = `${x}px`;
    child.style.top = `${y}px`;
}, 20);
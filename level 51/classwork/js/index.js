const child = document.getElementById('child');
const parent = document.querySelector('.parent');

let x = 0;
let y = 0;

const moveRight = setInterval(() => {
    x += 5;
    if (x === 400){
        clearInterval(moveRight);
        const moveDown = setInterval(() => {
            y += 5;
            if (y === 400){
                clearInterval(moveDown);
                const moveLeft = setInterval(() => {
                    x -= 5;
                    if (x === 0){
                        clearInterval(moveLeft);
                        const moveUp = setInterval(() => {
                            y -= 5;
                            if (y === 0){
                                clearInterval(moveUp);
                            }
                            child.style.top = `${y}px`;
                        }, 20)
                    }
                    child.style.left = `${x}px`;
                }, 20)
            }
            child.style.top = `${y}px`;
        }, 20)
    }
    child.style.left = `${x}px`
}, 20);



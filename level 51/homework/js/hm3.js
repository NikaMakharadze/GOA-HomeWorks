const myBox = document.getElementById("child");
const moveamount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
    if (event.key.startsWith("Arrow")) {
       
        switch (event.key) {
            case "ArrowUp":
                y -= moveamount;
                break;
            case "ArrowDown":
                y += moveamount;
                break;
            case "ArrowLeft":
                x -= moveamount;
                break;
            case "ArrowRight":
                x += moveamount;
                break;
        }
        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
});


document.addEventListener("keydown", event => {
    myBox.textContent = event.key;
});

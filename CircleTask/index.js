let circle=document.querySelector(".circle");
let box=document.querySelector(".box");
let countX,countY=0;

document.addEventListener("keyup", function(e) {
    if (e.key == "ArrowRight" && countX < box.clientWidth - circle.offsetWidth) {
        countX += 10;
        circle.style.left = countX + "px";
    }
    if (e.key == "ArrowLeft" && countX > 0) {
        countX -= 10;
        circle.style.left = countX + "px";
    }
    if (e.key == "ArrowUp" && countY > 0) {
        countY -= 10;
        circle.style.top = countY + "px";
    }
    if (e.key == "ArrowDown" && countY < box.clientHeight - circle.offsetHeight) {
        countY += 10;
        circle.style.top = countY + "px";
    }
})


document.addEventListener("keydown", function(e) {
    if (e.key == "ArrowRight" && countX < box.clientWidth - circle.offsetWidth) {
        countX += 10;
        circle.style.left = countX + "px";
    }
    if (e.key == "ArrowLeft" && countX > 0) {
        countX -= 10;
        circle.style.left = countX + "px";
    }
    if (e.key == "ArrowUp" && countY > 0) {
        countY -= 10;
        circle.style.top = countY + "px";
    }
    if (e.key == "ArrowDown" && countY < box.clientHeight - circle.offsetHeight) {
        countY += 10;
        circle.style.top = countY+ "px";
    }
})
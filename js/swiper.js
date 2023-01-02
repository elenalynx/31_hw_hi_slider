
//  ПОКИ ЩО НЕ ГОТОВО

document.querySelector('.carousel').addEventListener('touchstart', handleTouchStart, false);

document.querySelector('.carousel').addEventListener('touchmove', handleTouchMove, false);

const logBlock = document.querySelector('.log-block');

let x1 = null;
let y1 = null;

function handleTouchStart(event) {
    const firstTouch = event.touches[0];
    x1 = firstTouch.clientX;
    y1 = firstTouch.clientY;
    // console.log(x1, y1);
}

function handleTouchMove(event) {
    if (!x1 || !y1) {
        return false;
    }

    let x2 = event.touches[0].clientX;
    let y2 = event.touches[0].clientY;
    // console.log(x2, y2);
    let xDiff = x2 - x1;
    let yDiff = y2 - y1;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        // r-l
        if (xDiff > 0) logBlock.textContent = 'right';
        else logBlock.textContent = 'left';
    } else {
        // t-b
        if (yDiff > 0) logBlock.textContent = 'down';
        else logBlock.textContent = 'top';

    }

    x1 = null;
    y1 = null;
}
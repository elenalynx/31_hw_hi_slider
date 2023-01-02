// Пишемо свій слайдер зображень.
//     Відображаємо зображення та кнопки Next, Prev з боків від зображення.
//     При кліку на Next - показуємо наступне зображення.
//     При кліку на Prev - попереднє .
//     При досягненні останнього зображення - ховати кнопку Next. Аналогічно з першим зображенням і кнопкою Prev.

// import {handleTouchStart, handleTouchMove} from "./swiper.js";
import {getImages} from "./imgReader.js";

getImages();

const images = document.querySelectorAll('.slider-carousel__img img');
const sliders = document.querySelector('.carousel__slider');
const next = document.querySelector('.carousel__next');
const prev = document.querySelector('.carousel__prev');
prev.style.visibility = 'hidden';

let count = 0;
let width;

init();
setPrev(prev);
setNext(next);

function init() {
    console.log('resize');
    width = document.querySelector('.carousel').offsetWidth;
    console.log(width);
    sliders.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

window.addEventListener('resize', init);

function setPrev(prev) {
    prev.addEventListener('click', () => {
        count--;
        next.style.visibility = 'visible';
        if (count <= 0) {
            prev.style.visibility = 'hidden';
            // count = images.length - 1;
        }
        rollSlider();
    });

}

function setNext(next) {
    next.addEventListener('click', () => {
        count++;
        prev.style.visibility = 'visible';

        if (count >= images.length - 1) {
            next.style.visibility = 'hidden';
            // count = 0;
        }
        rollSlider();
    });
}


function rollSlider() {
    sliders.style.transform = 'translate(-' + count * width + 'px)';
}


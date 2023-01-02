// import imagesJson from '/imgesJson.json' assert {type: "json"};

import { images as imagesJson } from './images.js';

const images = imagesJson;
console.log(images);

const imageOut = document.querySelector('.carousel__slider');

export function getImages() {
    for (let key in images) {
        let divImg = document.createElement('div');
        divImg.classList.add('slider-carousel__img');
        let img = document.createElement('img');
        img.setAttribute('data-key', key);
        img.src = `./img/${key}.jpg`;
        imageOut.append(divImg);
        divImg.appendChild(img);
    }
}

const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintImage(number){
    const image = new Image();
    image.src = `image/${number + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function getRandom(){
    const number = Math.floor(Math.random() * 5);
    return number;
}

function init(){
    const randomNumber = getRandom();
    paintImage(randomNumber);
}

init();

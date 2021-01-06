const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintImage(number){
    const image = new Image();
    image.src = `image/${number + 1}.jpg`;
    //image에 css를 넣기 위해 classList에 추가함으로써 설정한 class명으로 css설정이 가능
    image.classList.add("bgImage");
    //append() - 컨텐츠를 선택된 요소 내부의 끝 부분에서 삽입
    //prepend() - 콘텐츠를 선택한 요소 내부의 시작 부분에서 삽입
    //after() - 선택한 요소 뒤에 컨텐츠 삽입
    //before() - 선택된 요소 앞에 컨텐츠 삽입
    body.prepend(image);
    //body.appendChild(image);
}

function getRandom(){
    //math.floor는 소수점 아래를 버리고 정수만 가져오는 기능이다.
    //math.floor의 반대는 math.ceil이다 ceil은 소수점을 올림을 하는 것이다.
    const number = Math.floor(Math.random() * 5);
    return number;
}

function init(){
    const randomNumber = getRandom();
    paintImage(randomNumber);
}

init();

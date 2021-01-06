const clockContainer = document.querySelector(".js-clock"),
      clockTitle = clockContainer.querySelector("h1");
function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const houre = date.getHours();
    const second = date.getSeconds();
    clockTitle.innerText = `${houre < 10 ? `0${houre}` : houre}:${minutes < 10 ? `0${minutes}` : minutes}:${second < 10 ? `0${second}` : second}`;
    //위의 초에 넣은 if는 미니 if이다 오브젝트에 바로 조건을 거 수 있다.
    //미니 if문은 condition ? block(true) : block(false) 인걸 기억하기
    //setInterval(함수, 시간) 설정한 함수를 해당 시간마다 실행시키는 함수
    //시간은 밀리세컨드로 받기 때문에 1000에 1초이다.
}
function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();
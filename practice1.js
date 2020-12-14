//title이 ID일 경우
// const title = document.querySelector("#title");
//const title = document.getElementById("title");
//title이 클래스일 경우 
// const title = document.querySelector(".title");
//title.innerHTML = "Hi From Js";
// title.style.color = "white";
// document.title = "hello my site"
//title의 모든 정보를 볼 수 있다.
// console.dir (document);

const title = document.querySelector("#title");

function handleResize(event){
    console.log(event);
    //console.log("I have been resized");
}
//이벤트 생성
//handleResize()를 입력하면 바로 함수를 호출하는 것이다.
//resize는 브라우저의 크기를 변경할시 발생하는 이벤트다.
//window.addEventListener("resize", handleResize);

function handleClick(){
    title.style.color="green";
}
title.addEventListener("click", handleClick);

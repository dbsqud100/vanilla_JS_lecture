//title이 ID일 경우
//const title = document.querySelector("#title");
//const title = document.getElementById("title");
//title이 클래스일 경우 
// const title = document.querySelector(".title");
//title.innerHTML = "Hi From Js";
// title.style.color = "white";
// document.title = "hello my site"
//title의 모든 정보를 볼 수 있다.
// console.dir (document);

// const title = document.querySelector("#title");

// function handleResize(event){
//     console.log(event);
    //console.log("I have been resized");
// }

//이벤트 생성
//handleResize()를 입력하면 바로 함수를 호출하는 것이다.
//resize는 브라우저의 크기를 변경할시 발생하는 이벤트다.
//window.addEventListener("resize", handleResize);

// function handleClick(){
//     title.style.color="green";
// }
// title.addEventListener("click", handleClick);

//if else
//java와 같이 else if도 쓸 수가 있다.
// if(10==5){
//     console.log("hi");
// }else if("10"=="10"){
//     console.log("ho");
// }else {

// }

//피연산자 (다른 조건을 합쳐주는 기능 and, or)

//prompt는 유저에게 무엇을 물어 볼 수 있다. 
//오래된 javascript의 기능이다.
// const age = prompt("How old are you");
// console.log(age);

// const title = document.querySelector("#title");

// const BASE_COLOR = "rgb(52, 73, 94)";
// const OTHER_COLOR = "#7f8c8d";

// function handleClick(){
//     const currentColor = title.style.color;
//     if(currentColor === BASE_COLOR){
//         title.style.color = OTHER_COLOR;
//     } else {
//         title.style.color = BASE_COLOR;
//     }
// }

// function init(){
//     title.style.color = BASE_COLOR;
//     //title.addEventListener("click", handleClick);
//     //마우스가 닿았을 때 움직이는 이벤트
//     title.addEventListener("mouseenter", handleClick);
// }
// init();

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

// function handleClick(){
//     const hasClass = title.classList.contains(CLICKED_CLASS)
//     if(!hasClass){
//         title.classList.add(CLICKED_CLASS);
//     } else {
//         title.classList.remove(CLICKED_CLASS);
//     }
// }

//toggle사용하기
function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
}
function init(){
    title.addEventListener("click",handleClick);
}
init();






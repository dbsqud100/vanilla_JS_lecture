const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = `toDos`;

const toDos = [];

function saveToDos(){
    //JSON.stringify는 자바스크립트 object를 string으로 바꿔준다.
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
//자바스크립트는 local storage에 있는 모든 데이터를 string으로 저장한다.
function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "X";
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
    li.id = newId;
    const toDoObj = {
        text: text,
        id : newId
    };
    //배열에 값을 넣는 방법
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}
function somthing(text){
    paintToDo(text.text);
}
function loadToDos(){
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null){
        const parsedToDos = JSON.parse(toDos);
        //forEach안에 함수를 선언할 수도 있다.
        // parsedToDos.forEach(function(Todo){
        //     console.log(Todo.text);
        // });
        //아래와 같이 function을 따로 선언하는 것도 가능하다.
        parsedToDos.forEach(somthing);
    }
}

function  init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();
const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = `toDos`;

let toDos = [];

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    //filter는 array의 모든 아이템을 통해 함수를 실행하고 true인 아이템들만
    //가지고 새로운 array를 만든다.
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    //toDos가 const이기 때문에 아래와 같은 코딩은 불가능하다.
    //그렇기에 위의 cosnt를 let으로 변경시켜준다.
    toDos = cleanToDos;
    saveToDos();
    console.log(cleanToDos);
}

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
    delBtn.addEventListener("click",deleteToDo);
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
// function somthing(text){
//     paintToDo(text.text);
// }
function loadToDos(){
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null){
        const parsedToDos = JSON.parse(toDos);
        //forEach안에 함수를 선언할 수도 있다.
        // parsedToDos.forEach(function(Todo){
        //     paintToDo(Todo.text);
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
const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");

const toDoInput = toDoForm.querySelector("input");

let toDos = [];


const TODOS_KEY ="todos"

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //array을 string으로 저장 가능
}

function deleteToDo(event){
    const li = event.target.parentElement; //삭제할 li
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDO(newTodoObj){
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText = newTodoObj.text;
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDO(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item){

}

const savedToDos = localStorage.getItem(TODOS_KEY);
    
if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);//string을 array로 바꾸기
    toDos = parsedToDos; //처음에 빈값이여도 if문 먼저 들어와서 이거 실행
    parsedToDos.forEach(paintToDO); //로컬스토리지 값만큼 보여줌
}
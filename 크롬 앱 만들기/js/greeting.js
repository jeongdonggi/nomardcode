const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const loginInput = loginForm.querySelector("input");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

const savedUsername = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event){
    event.preventDefault(); // 제출 후 새로고침 막기
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); //로컬 스토리지에 값 저장
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreeting(username);
}

function paintGreeting(username){
    //greeting.innerText = "Hello " + username;
    greeting.innerText = `Hello ${username}`; //``백틱 기호 써야됨
    greeting.classList.remove(HIDDEN_CLASSNAME); 
}

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintGreeting(savedUsername);
}
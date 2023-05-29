const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d"); // 그림그랠 때 쓰는 거

canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 2;

//ctx.beginPath(); // 경로 새로 설정
//ctx.fillStyle ="red"; //색 바꾸기
// ctx.moveTo(50, 50); //처음 경로
// ctx.lineTo(100, 100); //마지막 경로이므로 이어서 그릴려면 또 써주면 됨
// ctx.stroke();

const colors = [
    "#ff3838",
    "#ffb8b8",
    "#c56cf0",
    "#ff9f1a",
    "#fff200",
    "#32ff7e",
    "#7efff5",
    "#18dcff",
    "#7d5fff",
];



function onclick(event){
    ctx.beginPath();
    ctx.moveTo(0, 0);
    const color = colors[Math.floor(Math.random() * colors.length)];
    ctx.strokeStyle = color;
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    ctx.closePath();
}

canvas.addEventListener("mousemove", onclick);
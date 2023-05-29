const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
//html에 만들어주기
const bgimage = document.createElement("img");
bgimage.src = `img/${chosenImage}`;
document.body.appendChild(bgimage); // body에 넣어주기
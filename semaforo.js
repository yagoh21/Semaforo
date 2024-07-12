
const img1 = document.getElementById("img1");
const button = document.getElementById("button");
let colorIndex = 0;
let intervalId = null;

const trafficLight = (event) =>{
    stopAutomatic();
    turnOn[event.target.id]();
}

const nextIndex = () => 

    colorIndex = colorIndex < 2 ? ++colorIndex : 0;

    


const changeColor = () => {
    const colors = ['red','yellow','green']
const color = colors[colorIndex];
turnOn[color]();
colorIndex++;
nextIndex();

}

const stopAutomatic = () => {

    clearInterval(intervalId);
}



const turnOn = {

    'red':  () =>img1.src = "./img/vermelho.jpg",
    'yellow':  () =>img1.src = "./img/amarelo.png",
    'green':  () =>img1.src = "./img/verde.png",
    'automatic' : ()=> intervalId = setInterval(changeColor, 1000)
}

button.addEventListener('click', trafficLight);

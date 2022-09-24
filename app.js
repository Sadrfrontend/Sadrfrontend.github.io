const start = document.querySelector('#start');

const timeBtns = document.querySelector('#time-list')
const screens = document.querySelectorAll('.screen');
const timeCount = document.querySelector('#time');
const board = document.querySelector('#board');

const colors = ['#fc3d03', '#c9ad2c', '#82b51b','#1bb5ab','#991bb5', '#5b1bb5', '#2760a1', '#5727a1', '#a12760'];
let color = '';

let score = 0;
let chooseTime = 0;
start.addEventListener('click', (event) => {
event.preventDefault();
screens[0].classList.add('up');
})

timeBtns.addEventListener('click', (event) => {
    if (event.target.classList.contains('time-btn') ) {
        chooseTime = +(event.target.getAttribute('data-time'));
        console.log(chooseTime);
        screens[1].classList.add('up');
        startGame();

    }
})


board.addEventListener('click', (event) => {
    if (event.target.classList.contains('circle')) {
        score++;
        event.target.remove();
        createRandomCircle()
    }
})

function startGame() {
    setInterval(decreaseTime,1000);
    createRandomCircle()
    setValue(chooseTime);

}

function decreaseTime () {
    if (chooseTime === 0) {
        finishGame();
    } else {
        let current = --chooseTime;
    if (current<10) {
        current = `0${current}`;
    }
    setValue(current);
    }  
}

function setValue(value) {
    timeCount.innerHTML = `00:${value}`;
}

function finishGame() {
    timeCount.parentNode.classList.add('hide');
    board.innerHTML = `<h1>Счет: <span class='primary'>${score}</span></h1>`
}




function createRandomCircle() {
const circle = document.createElement('div');
circle.classList.add('circle');

let size = getRandomNumber(10, 60);

const {width, height} = board.getBoundingClientRect()
const y = getRandomNumber(0, width-size);
const x = getRandomNumber(0, height-size);

circle.style.background = `${colors[rundomColor(colors)]}`;

circle.style.width = `${size}px`;
circle.style.height = `${size}px`;

circle.style.top = `${y}px`;
circle.style.right = `${x}px`;

board.append(circle);
}

function rundomColor(colors) {
   color = Math.floor(Math.random()*colors.length);
   return color;
}

function getRandomNumber(min, max) {
  let form = Math.round(Math.random() * (max-min)+min);
  return form;
}
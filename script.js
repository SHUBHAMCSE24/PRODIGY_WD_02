let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;

const display = document.getElementById("display");

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("lapBtn");

const lapList = document.getElementById("lapList");

function updateDisplay() {

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds;

    display.innerText = `${h}:${m}:${s}:${ms}`;
}

function stopwatch() {

    milliseconds++;

    if(milliseconds == 100){
        milliseconds = 0;
        seconds++;
    }

    if(seconds == 60){
        seconds = 0;
        minutes++;
    }

    if(minutes == 60){
        minutes = 0;
        hours++;
    }

    updateDisplay();
}

startBtn.addEventListener("click", () => {

    if(timer !== null){
        clearInterval(timer);
    }

    timer = setInterval(stopwatch, 10);
});

pauseBtn.addEventListener("click", () => {

    clearInterval(timer);
});

resetBtn.addEventListener("click", () => {

    clearInterval(timer);

    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;

    updateDisplay();

    lapList.innerHTML = "";
});

lapBtn.addEventListener("click", () => {

    let lapTime = display.innerText;

    let li = document.createElement("li");

    li.innerText = lapTime;

    lapList.appendChild(li);
});
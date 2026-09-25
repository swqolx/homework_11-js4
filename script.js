// exercise 1


let time = 60000 * 60
const startTime = time/2
let timerId = 0
timerId = setInterval(() => {
    time -= 1000
    if(time === startTime){
        alert("left 30 min")
    }
    if(time === 0){
        clearInterval(timerId)
    }
    console.log(time );
}, 1000);


// exercise 2

const timer = document.querySelector('#timer');
const startBtn = document.querySelector('#btn');
const img = document.querySelector('#img');

let starttime = 30000;
let intervalId 

btn.addEventListener('click', () => {
    btn.disabled = true;
    intervalId = setInterval(() => {
        starttime = starttime - 10;

        if (starttime <= 0) {
            clearInterval(intervalId);
            timer.textContent = "00:00";
            btn.disabled = false;
            alert("time is up");
        }else if (starttime === 10000) {
            img.style.display = 'block'
        }else if (starttime === 9000) {
            img.style.display = 'none'
        }

        let result = Math.ceil(starttime / 1000);
        let mins = Math.floor(result / 60);
        let secs = result % 60;

        let minute = String(mins).padStart(2, '0');
        let seconds = String(secs).padStart(2, '0');
        timer.textContent = `${minute}:${seconds}`;
    }, 1);
});

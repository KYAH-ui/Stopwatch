let timerDisplay = document.querySelector('.timerDisplay');
let stopBtn = document.getElementById('stopBtn');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn') ;

let msec = 0o0;
let sec = 0o0;
let mins = 0o0;

let timerId = null;

startBtn.addEventListener('click' , function(){
    if(timerId !== null){
        clearInterval(timerId);
    }
     timerId = setInterval(setTimer , 10)

});

stopBtn.addEventListener('click' , function(){
    clearInterval(timerId);
});

resetBtn.addEventListener('click' , function(){
    clearInterval(timerId);
    timerDisplay.innerHTML = `00 : 00 : 00`;
    msec = secs = mins = 0o0;
});


function setTimer (){
    msec++;
    if(msec == 100){
        msec = 0;
        secs++;
        if(sec == 60){
            sec = 0;
            mins++;
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString  = sec < 10 ? `0${sec}` : sec;
    let minsString = mins  < 10 ? `0${mins}` : mins;

    timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`; 
}
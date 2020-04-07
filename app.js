console.log("timers");

// var countdown = function(seconds, fn){
//     fn();

// }

// countdown(10, 'lift off!');

var startBtn = document.querySelector('.start');
var pauseBtn = document.querySelector('.pause');
var resetBtn = document.querySelector('.reset');

var display = document.querySelector('.display');

startBtn.addEventListener('click', function(){

var timerId = setInterval(function(){
    display.textContent = Number(display.textContent) + 1);
    }, 1000)
});



pauseBtn.addEventListener('click', function (){

clearInterval(timerId);

});

resetBtn.addEventListener('click', function(){

    clearInterval(timerId);
    display.textContent = 0;

});

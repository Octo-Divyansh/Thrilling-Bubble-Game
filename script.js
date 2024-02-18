var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

function getNewHit(){
    hitrn =Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent = hitrn;
}

function make_bubble(){

    var clutter = "";

    for(var i=1;i<=102;i++){
        var cnt = Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${cnt}</div>`;
    }
    document.querySelector("#pbottom").innerHTML = clutter;
}

function runTimer(){
    var timerInterval = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerInterval);
            document.querySelector("#pbottom").innerHTML = `<h1> Game Over!</h2>`;
        }
       
    },1000);
}

document.querySelector("#pbottom").addEventListener("click",function(dets){
    var clickedNum = Number(dets.target.textContent);             // target gives div and textContent gives content of div and number converts string into number. If number is represented in black it is a string. If a no is represented in blue colour then it is no.
    if(clickedNum === hitrn){
        increaseScore();
        make_bubble();
        getNewHit();
    }
});

runTimer();
make_bubble();
getNewHit();
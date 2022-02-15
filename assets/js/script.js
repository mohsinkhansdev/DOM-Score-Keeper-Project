// DOM Score Keeper Project
var p1btn = document.querySelector("#p1");
var p2btn = document.querySelector("#p2");
var resetbtn = document.querySelector("#reset");
var p1d = document.querySelector("#p1display");
var p2d = document.querySelector("#p2display");
var numinput = document.querySelector("input");
var wscore = document.querySelector("p span");

var p1score = 0
var p2score = 0
var gameover = false;
var winningscore = 5;

p1btn.addEventListener("click", function() {
    if(!gameover){
        p1score++
    if(p1score === winningscore){
        p1d.classList.add("winner");
        gameover = true;    
}    
    p1d.textContent = p1score;

    }

});

p2btn.addEventListener("click", function() {
    if(!gameover){
        p2score++
    if(p2score === winningscore){
        p2d.classList.add("winner");
        gameover = true;    
}    
    p2d.textContent = p2score;

    }

});

resetbtn.addEventListener("click", function() {
    reset();
});

function reset () {
    p1score = 0;
    p2score = 0;
    p1d.textContent = 0;
    p2d.textContent = 0;
    p1d.classList.remove("winner");
    p2d.classList.remove("winner");
    gameover = false;
};

numinput.addEventListener("change", function() {
    wscore.textContent = this.value;
    winningscore = Number(this.value);
    reset();
});
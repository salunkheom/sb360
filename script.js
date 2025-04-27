let balls = document.getElementById("balls");
let overs = document.getElementById("overs");
let runs = document.getElementById("runs");
let run = document.getElementById("run");
let cut = document.getElementById("cut");
let b1c = document.getElementById("cut1");
let b2c = document.getElementById("cut2");
let wide = document.getElementById("wide");
let ball = document.getElementById("ball");
let boInput = document.getElementById("bo");
let btInput = document.getElementById("bt");
let boButton = document.getElementById("boButton"); // This button is not present in the provided HTML
let btButton = document.getElementById("btButton"); // This button is not present in the provided HTML

function Run(){
    runs.value = parseInt(runs.value) + 1;
}

function Cut(){
    runs.value = parseInt(runs.value) - 1;
}
function b1Cut(){
    boInput.value = parseInt(boInput.value) - 1;
}
function b2Cut(){
    btInput.value = parseInt(btInput.value) - 1;
}

function Wide(){
    runs.value = parseInt(runs.value) + 1;
}

function Ball(){
    balls.value = parseInt(balls.value) + 1;
    Overs();
}

function Overs(){
    if (balls.value % 6 == 0) {
        overs.value = parseInt(overs.value) + 1;
        balls.value = 0;
    }
}

function Bo(){
    boInput.value = parseInt(boInput.value) + 1;
}

function Bd(){
    btInput.value = parseInt(btInput.value) + 1;
}

run.addEventListener("click", Run);
cut.addEventListener("click", Cut);
wide.addEventListener("click", Wide);
ball.addEventListener("click", Ball);
boButton.addEventListener("click", Bo); // This button is not present in the provided HTML
btButton.addEventListener("click", Bd); // This button is not present in the provided HTML
 b1c.addEventListener("click", b1Cut);
 b2c.addEventListener("click", b2Cut);
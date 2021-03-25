
//expand

function buttonAnimateExpand() {
    document.getElementById('buttonLine').style.display = "flex";
}

function buttonNotAnimateExpand() {
    document.getElementById('buttonLine').style.display = "none";
}

//glass

function buttonAnimateGlass() {
    document.getElementById('glass').style.display = "flex";
}

function buttonNotAnimateGlass() {
    document.getElementById('glass').style.display = "none";
}

//collision

function buttonAnimateCollision() {
    document.getElementById('ball01').style.display = "flex";
    document.getElementById('ball02').style.display = "flex";
    document.getElementById('ballMaster').style.display = "flex";
}

function buttonNotAnimateCollision() {
    document.getElementById('ball01').style.display = "none";
    document.getElementById('ball02').style.display = "none";
    document.getElementById('ballMaster').style.display = "none";
}

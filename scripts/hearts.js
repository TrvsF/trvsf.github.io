// doHeart();

function doHeart() {
    let heartlist = getHeartList();

    for (let i = 0; i < heartlist.length; i++) {
        heartlist[i].innerHTML = "<3";
        heartlist[i].style.left = randomInt(0, 90) + "%";
        heartlist[i].style["animation-duration"] = randomFloat(2, 10) + "s";
        heartlist[i].style.color = "hsl(" + randomInt(2, 7) + ", " + randomInt(60, 100) + "%"  + ", " + randomInt(60, 100) + "%" + ")";
        heartlist[i].style["font-size"] = randomFloat(1, 4) + "em";
    }    
}

function getHeartList() {
    return document.getElementsByClassName("gheart");
}

function randomInt(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomFloat(min, max) { 
    return Math.random() * (max - min + 1) + min
}
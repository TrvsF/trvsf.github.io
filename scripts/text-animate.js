let flag = false;
var changfont = window.setInterval(changeFont, 350);

document.body.style.fontFamily = "henryblue";

function changeFont() {
    flag = !flag;
    if (flag) {
        document.body.style.fontFamily = "henryred";
    } else {
        document.body.style.fontFamily = "henryblue";
    }
}
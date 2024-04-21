let bg = document.getElementById("bg");
let moon = document.getElementById("moon");
let mountain = document.getElementById("mountain");
let road = document.getElementById("road");

function scrollEvent() {
    var value = window.scrollY;
    bg.style.top = value * 0.5 + 'px';
    mountain.style.top = -value * 0.15 + 'px';
    moon.style.left = -value * 0.5 +'px';
}

window.addEventListener('scroll', scrollEvent);
const parallax = document.getElementById("parallax");
const parallax1 = document.getElementById("parallax1");

let section0Height = document.querySelector('.section0').offsetHeight;
let section1Height = document.querySelector('.section1').offsetHeight;

window.addEventListener("resize", function(){
    section0Height = document.querySelector('.section0').offsetHeight;
    section1Height = document.querySelector('.section1').offsetHeight;
})

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
})

window.addEventListener("scroll", function(){
    let offset1 = window.pageYOffset;
    parallax1.style.backgroundPositionY = (offset1 - (section0Height + section1Height)) * 0.7 + "px";
})

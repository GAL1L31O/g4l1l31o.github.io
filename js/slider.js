const slider = document.querySelector("#slider");

const btnR = document.querySelector("#btn-right");
const btnL = document.querySelector("#btn-left");

slider.style.marginLeft = "-100%";

function next () { 
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(() => {
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

function prev () {
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length-1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(() => {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}

function auto () {
    setInterval(function() {
        next();
    }, 5500);
}

btnR.addEventListener('click', function() {
    next();
});

btnL.addEventListener('click', function() {
    prev();
});

auto();
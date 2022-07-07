const track = document.querySelector(".slider__track");
const slides = Array.from(track.children);
const navigation = document.querySelector(".slider__navigation");
const indicators = Array.from(navigation.children);

var slideHeight = slides[0].getBoundingClientRect().height;

var setSlidePosition = (slide, index) => {
    slide.style.top = slideHeight * index + 'px';
}

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = "translateY(-" + targetSlide.style.top;
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
}

window.addEventListener("resize", function(){
    slideHeight = slides[0].getBoundingClientRect().height;
    console.log(slideHeight);
    
    slides.forEach(setSlidePosition);
})

//INDICATORS
navigation.addEventListener('click', e => {
    const targetIndicator = e.target.closest('button');

    const currentSlide = track.querySelector(".current-slide");
    const currentIndicator = navigation.querySelector(".current-slide");
    const targetIndex = indicators.findIndex(indicator => indicator === targetIndicator);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    
})
const prevButton = document.getElementById('left-arrow');
const nextButton = document.getElementById('right-arrow');
const carousel = document.querySelector('.showoff');
const slides = document.querySelectorAll('.player');

let child_index=2;

prevButton.addEventListener('click', () => {
  updateCarousel('left');
});

nextButton.addEventListener('click', () => {
  updateCarousel('right');
});

function updateCarousel(direction) {
    if (direction==='left'){
        if(child_index==0){
            child_index=5
        }else{
            child_index--;
        }
    }
    else {
        if(child_index==5){
            child_index=0
        }else{
            child_index++;
        }
    }
  slides.forEach((slide, index) => {
    if(index===child_index){
        slide.querySelector('p').classList.add("display-p");
        slide.querySelector("img").classList.add("display-image");
    }
    else{
        slide.querySelector('p').classList.remove("display-p");
        slide.querySelector("img").classList.remove("display-image");
    }
    let order = 2-(child_index-index);
    if(order<0){order+=6;}
    if(order>5){order-=6}
    slide.style.order = order;
  });

}

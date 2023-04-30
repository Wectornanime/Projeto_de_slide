const slides = document.querySelector('div.slides');
const slider = document.querySelector('div.slider');

const widthImg = 630;
const slideCount = 8;

let sld = 0;
let mouseStatus;

function autoSlide() {   
    manualSlide('+');
    slideUpdate();
};


function manualSlide(dir) {
    switch (dir) {
        case '+':
            sld++;
            if (sld >= slideCount){
                sld = 0;
            };
            break;

        case '-':
            sld--;
            if (sld < 0){
                sld = slideCount-1;
            };
            break;
    
        default:
            break;
    };

    slideUpdate();
};

function slideUpdate() {
    slides.style.transform = `translateX(-${sld * widthImg}px)`;
};

slider.addEventListener('mouseout', autoSlide(true));

slider.addEventListener('mouseover', autoSlide(false))


setInterval( () => {
    slider.addEventListener('mouseover', function() { mouseStatus='over' });
    slider.addEventListener('mouseout', function() { mouseStatus='out' });
    
    if (mouseStatus != 'over') {
        autoSlide();
    };
}, 2500);

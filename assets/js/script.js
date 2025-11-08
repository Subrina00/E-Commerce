
'use strict';

const addEventOnElem = function(elements, eventType, callback) {
    for(let i=0 ; i<elements.length ; i++){
        elements[i].addEventListener(eventType, callback);
    }
}

const $header = document.querySelector('[data-header]');
const $navbar = document.querySelector('[data-navbar]');
const $navToggler = document.querySelectorAll('[data-nav-toggler]');
const $overlay = document.querySelector('[data-overlay]');
const $dropdownToggler = document.querySelector('[data-dropdown-toggler]');
const $dropdown = document.querySelector('[data-dropdown]');
const $cartToggler = document.querySelector('[data-cart-toggler]');
const $cartModal = document.querySelector('[data-cart-modal]');

const toggleNavbar = function () {
    $navbar.classList.toggle('active');
    $overlay.classList.toggle('active');
    document.body.classList.toggle('active');
}

addEventOnElem($navToggler, 'click' ,toggleNavbar);

const toggleElem = function(elem) {
    elem.classList.toggle('active');
}

$dropdownToggler.addEventListener('click', function() {
    toggleElem($dropdown);
})


$cartToggler.addEventListener('click',function() {
    toggleElem($cartModal);
})


const activeHeader = function() {
    window.scrollY > 50 ? $header.classList.add('active') : $header.classList.remove('active');
}

window.addEventListener('scroll', activeHeader);




const $sliderConatiners = document.querySelectorAll('[data-slider-container]');

function sliderInitial($sliderConatiner) {
    const $slider = $sliderConatiner.querySelector('[data-slider]');
    const $prevBtn = $sliderConatiner.querySelector('[data-prev-btn]');
    const $nextBtn = $sliderConatiner.querySelector('[data-next-btn]');

    function nextSlide () {
        $slider.appendChild($slider.firstElementChild);
    }
    $nextBtn.addEventListener('click', nextSlide);

    function prevSlide () {
        $slider.prepend($slider.lastElementChild);
    }
    $prevBtn.addEventListener('click', prevSlide);

    let autoSlider;

    function autoslide() {
        autoSlider = setInterval(function() {
            nextSlide();
        }, 2000);
    }

    autoslide();

    function delSlider() {
        clearInterval(autoSlider);
    }

    $slider.addEventListener('mouseover', delSlider);
    $prevBtn.addEventListener('mouseover', delSlider);
    $nextBtn.addEventListener('mouseover', delSlider);

    $slider.addEventListener('mouseout', autoslide);
    $prevBtn.addEventListener('mouseout', autoslide);
    $nextBtn.addEventListener('mouseout', autoslide);
}

for(let i=0 ; i<$sliderConatiners.length ; i++) {
    sliderInitial($sliderConatiners[i]);
}
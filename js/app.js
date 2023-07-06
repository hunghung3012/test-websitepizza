let slider = document.querySelector('.slider .list');
let items = slider.querySelectorAll('.list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 23000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 23000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};


// Slider 2
let prev_sl2 = document.getElementById('slider_second_prev');
let next_sl2 = document.getElementById('slider_second_next');
let image = document.querySelector('.slider_second .images');
let items_sl2 = document.querySelectorAll('.slider_second .images .item');


let rotate = 0;
let active_sl2 = 0;
let countItem = items_sl2.length;
let rotateAdd = 360 / countItem;

function nextSlider(){
    active_sl2 = active_sl2 + 1 > countItem - 1 ? 0 : active_sl2 + 1;
    rotate = rotate + rotateAdd; 
    show();
}
function prevSlider(){
    active_sl2 = active_sl2 - 1 < 0 ? countItem - 1 : active_sl2 - 1;
    rotate = rotate - rotateAdd; 
    show();     
     
}
function show(){
    image.style.setProperty("--rotate", rotate + 'deg');
    image.style.setProperty("--rotate", rotate + 'deg');
   
}
next_sl2.onclick = nextSlider;
prev_sl2.onclick = prevSlider;
const autoNext = setInterval(nextSlider, 3000);




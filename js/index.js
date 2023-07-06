
window.addEventListener("load", ()=> {
  setTimeout(function() {
  document.querySelector('.loader').style.display = 'none';
  document.querySelector('.all_container').style.display = 'block';
},500);
})


let list_pizza = [
  {
      id: 1,
      name: "Pizza Thập Cẩm",
      subName: "Pizza",
      price: 12000,
      quantity : 10,
      img: "images/menu/pizza/pizza (5).png",
      tag: 2
  },
  {
      id: 2,
      name: "Pizza Thịt Xông Khói",
      subName: "Pizza",
      price: 12000,
      quantity : 10,
      img: "images/menu/pizza/pizza (2).png",
      tag: 2
  },
  {
      id: 3,
      name: "Pizza Thịt Heo",
      subName: "Pizza",
      price: 12000,
      quantity : 10,
      img: "images/menu/pizza/pizza (3).png",
      tag: 2
  },
  {
      id: 4,
      name: "Pizza Xúc Xích",
      subName: "Pizza",
      price: 12000,
      quantity : 10,
      img: "images/menu/pizza/pizza (9).png",
      tag: 2
  },
  {
      id: 5,
      name: "Pizza Phô Mai Chảy",
      subName: "Pizza",
      price: 13000,
      quantity : 10,
      img: "images/menu/pizza/pizza (4).png",
      tag: 2
  }
];
const menu_pizza = $('.intro_menu');
// const slider_introContainer =  $('.slide_intro');
// const slider_intro =  $('.slide_intro_img');
// const sliderIntro_img =  $$('.slide_intro_img img');
// console.log(slider_intro);
// const buttonNextIntro = $('.slide_intro_next');
// const buttonNextPrev = $('.slide_intro_prev');
// // slider
// let widthImg = slider_introContainer.offsetWidth;
// let index_intro=0; 
// sliderIntro_img.forEach((item) => {
//   item.style.width = widthImg;
// }) 


// function nextIntro() {
//   if (index_intro<sliderIntro_img.length -1 ) {
//   index_intro++;}
//   else { index_intro=0;}
//   slider_intro.style.transform = ` translateX(-${widthImg*index_intro}px)`; 
// }
// function prevIntro() {
//   console.log(index_intro);
//   if (index_intro == 0) {
//   // index_intro=sliderIntro_img.length -1 ;
// }
//   else{ 
//     index_intro--;
//     slider_intro.style.transform = ` translateX(-${widthImg*index_intro}px)`; }
  
// }
// buttonNextIntro.addEventListener("click",()=> {
//   nextIntro();
// }) ;
// buttonNextPrev.addEventListener("click",()=> {
//   prevIntro();
// }) ;

// end slider

renderAll();
function renderAll() {
    renderProduct(list_pizza,menu_pizza);
} 

function renderProduct(list , menu) {
    const htmls = list.map((pizza, index) => {
        return renderListProduct(pizza, index);
    })

   let a = `
                <div class="menu_item col l-4 m-6 c-12">
                        <div class="item_pizza item_pizza_sp">
                          <div class="img_item_pizza_sp">
                            <img src="images/menu/menu2.jpg" alt="">
                          </div>
                        <p class="text_item_pizza_sp"><a href="menu.html">Xem thêm</a></p>
                        </div>
                </div>`;

    let temp = htmls.join('');
    console.log(a);
    // console.log(temp.concat(a));
    menu.innerHTML = temp+a;
}
function renderListProduct(pizza, index) {
    return `
    <div class="menu_item col l-4 m-6 c-12">
                      <div class="item_pizza">
                        <div class="item_pizza_img">
                          <img src="${pizza.img}" alt="" />
                        </div>
                        <div class="item_pizza_text display_flex">
                            <div class="pizza_costname">
                            <p class="pizza_cost_name"><span>${pizza.name.split(" ")[0]}</span>${pizza.name.replace(pizza.name.split(" ")[0], "")}</p>
                          <p class="pizza_cost_text">${convert(pizza.price)}</p>
                        </div>
                          <div class="pizza_heart_icon">
                            <i class="fa-solid fa-heart"></i>
                          </div>
                        </div>
                        <div class="pizza_star-container">
                            <ul class="pizza_star">
                                <li><i class="fa-solid fa-star"></i></li>
                                <li><i class="fa-solid fa-star"></i></li>
                                <li><i class="fa-solid fa-star"></i></li>
                                <li><i class="fa-solid fa-star"></i></li>
                                <li><i class="fa-solid fa-star"></i></li>
                            </ul>
                        </div>
                      </div>
                    </div>`
}

function convert(number) {
    let vnd = number.toLocaleString('vi', { style: 'currency', currency: 'VND' });
    vnd = vnd.replace('.', ',');
    return vnd;
}

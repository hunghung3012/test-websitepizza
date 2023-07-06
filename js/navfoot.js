const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const quantity_icon = $('.quantity__cart-infor');
const list_cart_menu = $('.list__cart');

const quantityCart = $('.quantity__cart');
const cartContainer = $('.cart');
const overlay = $('.overlay');
const backCart_button = $('.button__back');
const animateItems = $$('.animation_item');
const listMenuItem = $$('.menu_item a');
const priceProduct = $('.cart__total-content');
const numberProduct = $('.cart__quanlity .quanlity');
const select_nav_mobile = $('.select_nav_mobile');
const remove_moble_button = $('.select_nav_mobile .remove');
const bar_mobile_icon = $('.bar_mobile_icon');
const infor_icon = $('.infor_account .account');
const option_account = $('.option_account');
window.addEventListener('scroll',checkAnimate);


let cartItems_menu = localStorage.getItem('cartItems');
updateQuantityMenu();



function updateQuantityMenu() {
   cartItems_menu = localStorage.getItem('cartItems');
   if (cartItems_menu) {
    cartItems_menu = JSON.parse(cartItems_menu);
    quantity_icon.innerText = cartItems_menu.length;
    inforCartMenu(cartItems_menu) ;
    totalMenu(cartItems_menu) ;
   }

}

function inforCartMenu(cartItems_menu) {
 if (cartItems_menu) {
    cartMenu(cartItems_menu,list_cart_menu );
    }
}


function cartMenu(list , menu) {
        const htmls = list.map((pizza, index) => {
            return renderListCart(pizza, index);
        })
        menu.innerHTML = htmls.join('');
    }
function renderListCart(pizza, index) {
        return `
        <div class="item__cart">
                              <div class="item__cart-content">
                                <div class="item__cart-img">
                                    <img src="${pizza.product.img}" alt="">
                                </div>
                                <div class="item__cart-info">
                                    <div class="cart__info-name">${pizza.product.name}</div>
                                    <div class="cart__info-subname">${pizza.product.subName}</div>
                                    <div class="cart__info-price">${convert(pizza.product.price)}</div>
                                </div>
                            </div>
                            <div class="setting__quantily">
                                <div class="setting__quantily-btn">
                                    <div class="number__quantily">x${pizza.quantity_item}</div>
                                </div>
    
                                <div class="setting__quantily-remove">
                                    <button class="btn__remove" 
                                    onclick="deleteProductMenu(${pizza.product.tag} , ${pizza.product.id},event)"
                                    >
                                        <i class="fa-solid fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                    </div>
`
}
function deleteProductMenu(tag, id,event) {
    cartItems_menu = localStorage.getItem('cartItems');
    cartItems_menu = JSON.parse(cartItems_menu);
    cartItems_menu.forEach((item,index) =>{
        if (item.product.id == id && item.product.tag == tag) {
            let cartItems_temp = localStorage.getItem('cartItems');
            cartItemsArray = JSON.parse(cartItems_temp);
            cartItemsArray.splice(index, 1); 
            event.target.closest('.item__cart').remove();
            localStorage.setItem('cartItems', JSON.stringify(cartItemsArray));
      
            updateQuantityMenu();
           
            return;
        }
    });
}
function convert(number) {
    let vnd = number.toLocaleString('vi', { style: 'currency', currency: 'VND' });
    vnd = vnd.replace('.', ',');
    return vnd;
}
// Tính tiền
function totalMenu(cartItems_menu) {
    let itemsCartMenu = $$('.item__cart');
    // Tính Tổng giá tiền
    let tong = 0;
    itemsCartMenu.forEach((item,index) => {
      tong+=parseInt(item.querySelector('.item__cart-info .cart__info-price').innerText)
            * parseInt(item.querySelector('.number__quantily').innerText.substring(1));
      ;
    });
    let sizeOfProduct=0;
    // Tính số lượng sản phẩm
    cartItems_menu.forEach((item) =>{
        sizeOfProduct+=parseInt(item.quantity_item);
    });

    priceProduct.innerText = convert(tong*1000);
    numberProduct.innerText = sizeOfProduct;
  }
//   Hết
quantityCart.addEventListener("click" , ()=> {
    cartContainer.classList.add('active');
    overlay.classList.add('active');
});
function hideCart() {
    cartContainer.classList.remove('active');
    overlay.classList.remove('active');
  }
overlay.addEventListener("click", hideCart);
backCart_button.addEventListener("click", hideCart);

function checkAnimate() {
    animateItems.forEach(item => {
        const triggerPoint = window.innerHeight;
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < triggerPoint -100) {
            item.classList.add('animate_item-show');
        } else {
            item.classList.remove('animate_item-show');
        }
    });
}


// menu cho mobie
bar_mobile_icon.addEventListener('click',() => {
    select_nav_mobile.style.display = "flex";
});
remove_moble_button.addEventListener('click',() => {
    select_nav_mobile.style.display = "none";
});

// Show option account
infor_icon.addEventListener("click" , ()=> {
    option_account.classList.toggle("active");
})
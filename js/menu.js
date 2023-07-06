
let list_combo = [
    {
        id: 1,
        name: "Combo 1 ",
        subName: "Combo",
        price: 400000,
        quantity : 0,
        img: "images/menu/combo/combo (1).png",
        tag: 1
    },
    {
        id: 2,
        name: "Combo 2",
        subName: "Combo",
        price: 500000,
        quantity : 10,
        img: "images/menu/combo/combo (2).png",
        tag: 1
    },
    {
        id: 3,
        name: "Combo 3",
        subName: "Combo",
        price: 300000,
        quantity : 10,
        img: "images/menu/combo/combo (3).png",
        tag: 1
    },
    {
        id: 4,
        name: "Combo 4",
        subName: "Combo",
        price: 400000,
        quantity : 10,
        img: "images/menu/combo/combo (4).png",
        tag: 1
    },
    {
        id: 5,
        name: "Combo 5",
        subName: "Combo",
        price: 500000,
        quantity : 10,
        img: "images/menu/combo/combo (5).png",
        tag: 1
    }
];
let list_pizza = [
    {
        id: 1,
        name: "Pizza Thập Cẩm",
        subName: "Pizza",
        price: 150000,
        quantity : 10,
        img: "images/menu/pizza/pizza (5).png",
        tag: 2
    },
    {
        id: 2,
        name: "Pizza Thịt Xông Khói",
        subName: "Pizza",
        price: 200000,
        quantity : 10,
        img: "images/menu/pizza/pizza (2).png",
        tag: 2
    },
    {
        id: 3,
        name: "Pizza Thịt Heo",
        subName: "Pizza",
        price: 100000,
        quantity : 10,
        img: "images/menu/pizza/pizza (3).png",
        tag: 2
    },
    {
        id: 4,
        name: "Pizza Xúc Xích",
        subName: "Pizza",
        price: 180000,
        quantity : 10,
        img: "images/menu/pizza/pizza (9).png",
        tag: 2
    },
    {
        id: 5,
        name: "Pizza Phô Mai Chảy",
        subName: "Pizza",
        price: 220000,
        quantity : 10,
        img: "images/menu/pizza/pizza (4).png",
        tag: 2
    }
]
let list_drink = [
    {
        id: 1,
        name: "7 Up",
        subName: "Drink",
        price: 10000,
        quantity : 10,
        img: "images/menu/drink/drink (1).png",
        tag: 3
    },
    {
        id: 2,
        name: "Nước Lọc",
        subName: "Drink",
        price: 10000,
        quantity : 10,
        img: "images/menu/drink/drink (2).png",
        tag: 3
    },
    {
        id: 3,
        name: "Trà Chanh",
        subName: "Drink",
        price: 12000,
        quantity : 10,
        img: "images/menu/drink/drink (3).png",
        tag: 3
    },
    {
        id: 4,
        name: "Sữa Milo",
        subName: "Drink",
        price: 12000,
        quantity : 10,
        img: "images/menu/drink/drink (4).png",
        tag: 3
    },
    {
        id: 5,
        name: "Mirinda Cam",
        subName: "Drink",
        price: 15000,
        quantity : 10,
        img: "images/menu/drink/drink (5).png",
        tag: 3
    },
    {
        id: 6,
        name: "Trà Đào",
        subName: "Drink",
        price: 12000,
        quantity : 10,
        img: "images/menu/drink/drink (6).png",
        tag: 3
    }
    
]
let list_more = [
    {
        id: 1,
        name: "Bánh Phô Mai",
        subName: "More",
        price: 20000,
        quantity : 10,
        img: "images/menu/more/more (1).png",
        tag: 4
    },
    {
        id: 2,
        name: "Xiên Khoai Lang",
        subName: "More",
        price: 20000,
        quantity : 10,
        img: "images/menu/more/more (2).png",
        tag: 4
    },
    {
        id: 3,
        name: "Viên Phô Mai",
        subName: "More",
        price: 20000,
        quantity : 10,
        img: "images/menu/more/more (3).png",
        tag: 4
    },
    {
        id: 4,
        name: "Khoai Tây Chiên",
        subName: "More",
        price: 15000,
        quantity : 10,
        img: "images/menu/more/more (4).png",
        tag: 4
    },
    {
        id: 5,
        name: "Salad hộp",
        subName: "More",
        price: 40000,
        quantity : 10,
        img: "images/menu/more/more (6).png",
        tag: 4
    }
]

const menu_combo = $('.list_pizza .list_combo_row');
const menu_pizza = $('.list_pizza .list_pizza_row');
const menu_drink = $('.list_pizza .list_drink_row');
const menu_more = $('.list_pizza .list_more_row');
const buttons_sidebar = $$('.sidebar_item .item');
const buttons_sidebar_mobile = $$('.select_board_list .m-item');
const selectButtonOnMobile = $('.select_button');
const listPizza = $$('.list_pizza');
const nameOfFood = $('.name_title') ;
const subNameOfFood = $('.subname_title') ;
const priceOfFood= $('.price');
const imgOfFood = $('.infor_product_img img');
const quantity = $('.quantity input');
const buttonAddToCart = $('.addCart_button button');
const notice = $('.notice');
const inforProductContainer = $('.infor_product_container');
const findProduct = $('.find input');
const selectTypeIcons = document.querySelectorAll('.select_type i');
const scrollContainer = document.documentElement;

let listAll =$$('.menu_item');



renderAll();
function renderAll() {
    renderProduct(list_combo,menu_combo);
    renderProduct(list_pizza,menu_pizza);
    renderProduct(list_drink,menu_drink);
    renderProduct(list_more,menu_more);
} 
function renderProduct(list , menu) {
    const htmls = list.map((pizza, index) => {
        return renderListProduct(pizza, index);
    })
    menu.innerHTML = htmls.join('');
}
function renderListProduct(pizza, index) {
    let id_temp = parseInt(pizza.id)-1;
    return `
    <div class="menu_item col l-4 m-6 c-12 " onclick="inforProduct(${pizza.tag} , ${id_temp})" >
    <div class="item_pizza">
      <div class="item_pizza_img">
        <img src="${pizza.img}" alt="" />
      </div>
      <div class="item_pizza_text display_flex">
          <div class="pizza_costname">
           <p class="pizza_cost_name">${pizza.name}</p>
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
//Hiẹu ứng sidebar
buttons_sidebar.forEach((button, index) => {
    button.addEventListener("click" ,() => {
        turnOffSideBarMenu(index) ;
        $('.sidebar_item .active').classList.remove("active");
        button.classList.add("active");})
});
// side bar cho mobile
selectButtonOnMobile.addEventListener("click",() => {
    turnOffBoardMobile();
});
buttons_sidebar_mobile.forEach((button, index) => {
    button.addEventListener("click" ,() => {
        turnOffBoardMobile();
        turnOffSideBarMenu(index) ; })
});

function turnOffSideBarMenu(index) {
    listPizza.forEach((item,i)=> {
        if (index == 0) {
            item.classList.add("active");
        }
        else if(i+1 == index) {
            let listPizzActive =  $$('.list_pizza_container .active');
            listPizzActive.forEach((item) => {
                item.classList.remove('active');
            }) ;
            item.classList.add("active");
        }
    });
}
function  turnOffBoardMobile() {
    $('.select_board').classList.toggle('active');
}
let inforProduct_item ;
function inforProduct(pizzaTag, index) {
    inforProduct_item = inforProduct2(pizzaTag, index);
    nameOfFood.innerText = inforProduct_item.name;
    subNameOfFood.innerText = inforProduct_item.subName;
    priceOfFood.innerText = convert(inforProduct_item.price);
    imgOfFood.src = inforProduct_item.img;
    checkQuantity(inforProduct_item);
    buttonAddToCart.setAttribute('onclick', `addToCart(${pizzaTag}, ${index})`);
    $('.infor_product_container').style.display  = "flex";
    $('.overlay').classList.add('active');

}
function checkQuantity(inforProduct_item) {
    if (inforProduct_item.quantity>0) {
        quantity.value = 1;
        quantity.max = inforProduct_item.quantity;
        buttonAddToCart.style.display ="block";
        $('.addCart_button p').style.display ="none";
    }else {
        quantity.value = 0;
        buttonAddToCart.style.display ="none";
        $('.addCart_button p').style.display ="block";
    }
}

$('.exit').addEventListener("click",()=>{
    inforProductContainer.style.display  = "none";
    $('.overlay').classList.remove('active');
});

$('.overlay').addEventListener("click", () => {
    inforProductContainer.style.display = "none";
    $('.overlay').classList.remove('active');
});


function inforProduct2(pizzaTag, index) {
    switch (pizzaTag) {
        case 1:
        return list_combo[index]; 
        case 2:
        return list_pizza[index]; 
        case 3:
        return list_drink[index]; 
        case 4:
        return list_more[index]; 
           
    }
}
let cartItems ;
function addToCart(pizzaTag, index ) {
    
    inforProduct_item = inforProduct2(pizzaTag, index);
    // checkQuantity(inforProduct_item);
    showNotice();
    console.log(quantity.value); 
    let item =  {
        product : inforProduct_item,
        quantity_item :parseInt(quantity.value)
    };
    add(item);
    
    inforProduct_item.quantity -= quantity.value;
    updateQuantityMenu();
    // 
      

}
function add(item) {
    var cartItems = localStorage.getItem('cartItems');
    if (cartItems) {
        var cart = JSON.parse(cartItems);
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].product.id == item.product.id && cart[i].product.tag == item.product.tag) {
                cart[i].quantity_item += item.quantity_item;
               
                localStorage.setItem('cartItems', JSON.stringify(cart));
                return; 
            }
        }
    } else {
        var cart = [];
    }
    cart.push(item);
    localStorage.setItem('cartItems', JSON.stringify(cart));

    
}



function showNotice() {
    notice.classList.add('active');
    setTimeout(() => {
        notice.classList.remove('active');
    }, 3000);


}
findProduct.addEventListener("input" , (event) =>{
    let key = event.target.value;
    find(key.toUpperCase());

}) 
function find(key) {
    let allProduct = [
        {
            arr:list_combo,
            list : menu_combo
        },
        {arr:list_pizza,
            list : menu_pizza
            },
            {arr:list_drink,
                list : menu_drink
                },
                {arr:list_more,
                    list : menu_more
                    }  
    ];
    const lastScrollPosition = window.scrollY;

    allProduct.forEach((arr) => {
        let arr_temp=[];
        arr.arr.forEach((item) => { 
            if(item.name.toUpperCase().includes(key)) {
                arr_temp.push(item);
            }
        })
        
        setTimeout(() => {
            renderProduct(arr_temp, arr.list);
            window.scrollTo(0, lastScrollPosition);
          }, 500); // Delay 1.5 seconds (1500 milliseconds)
        });
    

}





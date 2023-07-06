

const list_cart = $('.shopping-cart');
const sub_total = $('.sub_total .sub_total_item');
const voucher = $('.coupon_total_item');
const totalItem = $('.total_item');
const buttonTotal =  $('.under_total button');
const quantityInput = $$('.quantity input');
const ship_item = $('.ship_item');
const buttonCoupon = $('.coupon-input_button  button');
const inputCoupon = $('.coupon-input_button input');
const formDelivery = $('.delivery');
const buttonSubmitDelivery= $('.submit-btn');
const noticeSucess = $('.notice_sucess');
var voucher_list = [
 {
  name : "25K",
  value :25000
 },
 {
  name : "30K",
  value :30000
 },
 {
  name : "40K",
  value :40000
 }
];


var cartItems = localStorage.getItem('cartItems');
inforCart();
function inforCart() {
 if (cartItems) {
     // Chuyển đổi chuỗi JSON thành mảng
     cartItems = JSON.parse(cartItems);
     // Hiển thị danh sách giỏ hàng
     renderProduct(cartItems,list_cart );
    }
}


function renderProduct(list , menu) {
        const htmls = list.map((pizza, index) => {
            return renderListProduct(pizza, index);
        })
        menu.innerHTML = htmls.join('');
    }
function renderListProduct(pizza, index) {
        return `
        <div class="item">
          <div class="item_detail">
          <div class="image">
            <img src="${pizza.product.img}" alt="" />
          </div>
          <div class="description">
            <span class="name_text">${pizza.product.name}</span>
            <span class="subName_text">${pizza.product.subName}</span>
          </div>
        </div>
          <div class="quantity">
            <input type="number" name="name" value="${pizza.quantity_item}" min="1" onchange="updateQuantity(${index},event)">
          </div>
       
          <div class="total-price">${convert(totalProduct(pizza.product.price, pizza.quantity_item))}</div>
          <div class="like_delete">
            <span class="button_like"><i class="fa-solid fa-heart"></i></span>
            <span class="button_delete" onclick="deleteProduct(${pizza.product.tag} , ${pizza.product.id},event)"><i class="fa-sharp fa-solid fa-trash"></i></span>
          </div>
        </div>
`
    }
    function totalProduct(price , quantity) {
        return parseInt( price*quantity);
    }
    function convert(number) {
      let vnd = number.toLocaleString('vi', { style: 'currency', currency: 'VND' });
      vnd = vnd.replace('.', ',');
      return vnd;
  }
    function updateQuantity(index, event) {
      var cartItems_temp = localStorage.getItem('cartItems');
      cartItems_temp = JSON.parse(cartItems_temp);
      cartItems_temp[index].quantity_item = event.target.value;
    
      // Cập nhật giá trị mới vào localStorage
      localStorage.setItem('cartItems', JSON.stringify(cartItems_temp));
    
      // Render lại danh sách giỏ hàng
      renderProduct(cartItems_temp, list_cart);
      total();
    }
    
    // function deleteProduct(tag, id,event) {
    //     console.log(event.target);
    //     cartItems.forEach((item,index) =>{
    //       var cartItems_temp;
    //         if (item.product.id == id && item.product.tag == tag) {
    //             cartItems_temp = localStorage.getItem('cartItems');
    //             cartItemsArray = JSON.parse(cartItems_temp);
    //             cartItemsArray.splice(index, 1); 
    //             event.target.closest('.item').remove();
    //             console.log(item.product.id +""+ id+""+  item.product.tag+""+ tag);
    //             localStorage.setItem('cartItems', JSON.stringify(cartItemsArray));
    //             // total();
    //             return;
    //         }
    //     });
    // }
    function deleteProduct(tag, id, event) {
      console.log(event.target);
      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        if (item.product.id == id && item.product.tag == tag) {
          cartItems.splice(i, 1);
          event.target.closest('.item').remove();
          console.log(item.product.id + "" + id + "" + item.product.tag + "" + tag);
          localStorage.setItem('cartItems', JSON.stringify(cartItems));
          total();
          return;
        }
      }
    }

total();
function total() {
  updateQuantityMenu();
  const itemsCart = $$('.item');
  let tong = 0;
  itemsCart.forEach((item,index) => {
    tong+=chuyenDoiTien(item.querySelector('.total-price').innerText);
  });
  sub_total.innerText = convert(tong*1000);
  let sum_temp = tong +  parseInt(ship_item.innerText)+ parseInt(voucher.innerText);
  if (sum_temp>=0) {
    totalItem.innerText = convert( sum_temp*1000);
  }else {
    totalItem.innerText="Free";
  }

}
function chuyenDoiTien(number) {
  if(number.length > 10) {
    let start = number.indexOf(",");
      return parseFloat(number)*1000+ parseFloat(number.substring(start+1));
  }
  else {
    return parseFloat(number)
  }
}
//Kiểm tra mã giảm giá
buttonCoupon.addEventListener("click" ,() => {
  checkCoupon();
});
inputCoupon.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    checkCoupon();
  }
});
function checkCoupon() {
  const notice = $('.notice_text span');
  if (inputCoupon.value == "") {
    showNotice(notice , "Vui Lòng Nhập Mã");
  }
  else {
    let bool = false;
    let price = 0;
    voucher_list.forEach((item, index) => {
      if(item.name == inputCoupon.value.toUpperCase()) {
        bool = true;
        price = item.value;
      }
    })
    if (bool) {
  
      $('.arrow').classList.add('active');
      setTimeout(() => {
        $('.arrow').classList.remove('active');
      },500);
      voucher.innerText = convert(-price);
      inputCoupon.value="";
      total();
    }
    else {
      showNotice(notice , "Mã Không Hợp Lệ");
    }
  }
}
function showNotice(notice,text) {
  notice.innerText = text;
  notice.parentElement.parentElement.classList.add('active');
  setTimeout(() => {
    notice.parentElement.parentElement.classList.remove('active');
  },1000);

}

$('.off').addEventListener('click', function(event) {
  event.preventDefault();
  formDelivery.style.display = 'none';
  overlay.classList.remove('active');
});
buttonTotal.addEventListener('click' ,(event)=> {
  let order_item = JSON.parse(localStorage.getItem('cartItems'));
  console.log(order_item);
  if (order_item == null) {
    alert("Giỏ Hàng Đang Rỗng, Vui Lòng Thêm Sản Phẩm");
  }
  else {
  formDelivery.style.display = 'block';
  overlay.classList.add('active');
}
});
var order_list =[];
// buttonSubmitDelivery.addEventListener('click' ,(event)=> {

//   event.preventDefault();
//   if(checkInforClient()) {
//   noticeSucess.classList.add('active');
//   setTimeout(() => {
//     noticeSucess.classList.remove('active');
//   }, 5000);
//   order();
//   client();
//   localStorage.removeItem('cartItems'); 
//   }
// });
var nameRegex = /.+/;;
var addressRegex = /.+/;
var phoneRegex = /^\+?[0-9]{10}$/;
buttonSubmitDelivery.addEventListener('click', function(event) {
  event.preventDefault();

  var inputName = document.querySelector('.inputBox_name input');
  var inputAddress = document.querySelector('.inputBox_address input');
  var inputPhone = document.querySelector('.inputBox_phone input');
  
  var errorName = document.querySelector('.inputBox_name .error');
  var errorAddress = document.querySelector('.inputBox_address .error');
  var errorPhone = document.querySelector('.inputBox_phone .error');
  
  var isValid = true;

  if (!nameRegex.test(inputName.value)) {
    errorName.textContent = "Họ tên không hợp lệ";
    isValid = false;
  } else {
    errorName.textContent = "";
  }

  if (!addressRegex.test(inputAddress.value)) {
    errorAddress.textContent = "Địa chỉ không hợp lệ";
    isValid = false;
  } else {
    errorAddress.textContent = "";
  }

  if (!phoneRegex.test(inputPhone.value)) {
    errorPhone.textContent = "Số điện thoại không hợp lệ";
    isValid = false;
  } else {
    errorPhone.textContent = "";
  }

  if (isValid) {
    // Thực hiện các hành động khi thông tin hợp lệ
 
    noticeSucess.classList.add('active');
    setTimeout(() => {
      noticeSucess.classList.remove('active');
    }, 5000);
    order();
    client();
    localStorage.removeItem('cartItems'); 
  }
});

function order() {
  let order_item = JSON.parse(localStorage.getItem('cartItems'));
  let list_order = JSON.parse(localStorage.getItem('orderItems'));
  if (!list_order) {
    list_order = [];
  }
  list_order.push(order_item);
  localStorage.setItem('orderItems', JSON.stringify(list_order));
}
function client() {
  var list_client = JSON.parse(localStorage.getItem('client'));

  // Kiểm tra xem list_client đã tồn tại và khởi tạo nếu cần
  if (!list_client) {
    list_client = [];
  }
  
  var inforClient = {
    name: $('.inputBox_name input').value,
    address: $('.inputBox_address input').value,
    phone: $('.inputBox_phone input').value ,
    total : $('.total_item').innerText
  };
  
  console.log(list_client);
  list_client.push(inforClient);
  localStorage.setItem('client', JSON.stringify(list_client));
}

// regrex thôgn tin giao hàng
// Function to validate input value with regex
function validateInput(input, regex) {
  var inputValue = input.value.trim();
  var errorSpan = input.nextElementSibling;

  if (regex.test(inputValue)) {
    errorSpan.textContent = "";
    return true;
  } else {
    errorSpan.textContent = "Dữ liệu không hợp lệ";
    return false;
  }
}

// Event listeners for input blur event
var inputs = document.querySelectorAll('.inputBox input');
inputs.forEach(function(input) {
  input.addEventListener('blur', function() {
    var inputType = this.getAttribute('type');
    var isValid = true;

    switch (inputType) {
      case 'text':
        isValid = validateInput(this, nameRegex);
        break;
      case 'number':
        isValid = validateInput(this, phoneRegex);
        break;
      // Thêm các case cho các loại input khác (nếu cần)
    }

    if (!isValid) {
      this.classList.add('error');
    } else {
      this.classList.remove('error');
    }
  });
});




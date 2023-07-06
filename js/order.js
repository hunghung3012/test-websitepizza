const order_information = $('.order_information');
var list_order_arr = JSON.parse(localStorage.getItem('orderItems'));
renderAll(list_order_arr,order_information);
function renderAll(list, menu) {

    const htmls = list.map((pizza, index) => {
        return renderListAll(pizza, index);     
    });
    menu.innerHTML = htmls.join('');

    const list_order = $$('.list_order');
   
    list_order_arr.forEach((item,index) =>{
        renderProduct(item,list_order[index]);
    })
    setValueClient(list_order_arr);

   
}

function renderProduct(list, menu) {
    const htmls = list.map((pizza, index) => {
        return renderListProduct(pizza, index);
    });
    menu.innerHTML = htmls.join('');
};
function renderListProduct(pizza, index) {
    return `
    <div class="order_product display_flex">
    <div class="img_name">
        <img src="${pizza.product.img}" alt="">
        <span>${pizza.product.name}</span>
    </div>
    <p class="order_quantity">x${pizza.quantity_item}
    </p>
    <p class="order_price">
    ${convert(pizza.product.price)}
    </p>
</div>
    `
    
}
function renderListAll(pizza, index) {
    return `
    <div class="order_item">
            <div class="client_infor">
                <p class="order_title">
                    Đơn Hàng ${index+1}:<br>
                    Thông Tin Giao Hàng:</p>
                <p class="address">
                    Nhà Văn Hóa
                </p>
                <p class="name">
                    Nguyễn Văn A
                </p>
                <p class="number_phone">
                    0989333
                </p>
            </div>
            <div class="list_order">             
            </div>
            <div class="button_total">
                <p class="order_total_price">
                    <span>Tổng tiền:</span> 90000
                </p>
                <p class="order_button_cancel" onclick="deleteOrderItem(${index},event)">Hủy Đơn Hàng</p>
                
            </div>

           
        </div>
    `
    
}
function setValueClient() {
    const nameClient = $$('.client_infor .name');
    const addressClient = $$('.client_infor .address');
    const numberphoneClient = $$('.client_infor .number_phone');
    const order_total_price = $$('.order_total_price');
    var list_client = JSON.parse(localStorage.getItem('client'));
    list_client.forEach((item,index) =>{
    nameClient[index].innerText ="Tên:  " + item.name;
    addressClient[index].innerText ="Địa Chỉ:  " + item.address;
    numberphoneClient[index].innerText ="Số Điện Thoại:  " + item.phone;
    order_total_price[index].innerHTML ="<span>Tổng tiền:</span>" +  item.total;
    })
}
function deleteOrderItem(index,event) {
    let list_order_arr = JSON.parse(localStorage.getItem('orderItems'));
    list_order_arr.splice(index, 1);
    localStorage.setItem('orderItems', JSON.stringify(list_order_arr));
    let list_client = JSON.parse(localStorage.getItem('client'));
    list_client.splice(index, 1);
    localStorage.setItem('client', JSON.stringify(list_client));
    event.target.closest('.order_item').remove();
}
